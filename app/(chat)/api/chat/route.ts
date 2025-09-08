import {
  convertToModelMessages,
  createUIMessageStream,
  JsonToSseTransformStream,
  smoothStream,
  stepCountIs,
  streamText,
} from 'ai';

import { type RequestHints, systemPrompt } from '@/lib/ai/prompts';
import { generateUUID } from '@/lib/utils';
import { requestSuggestions } from '@/lib/ai/tools/request-suggestions';

import { getResume } from '@/lib/ai/tools/get-resume';
import { sendEmail } from '@/lib/ai/tools/send-email';
import { isProductionEnvironment } from '@/lib/constants';
import { myProvider } from '@/lib/ai/providers';

import { postRequestBodySchema, type PostRequestBody } from './schema';
import { geolocation } from '@vercel/functions';
import { ChatSDKError } from '@/lib/errors';
import type { ChatMessage } from '@/lib/types';
import type { ChatModel } from '@/lib/ai/models';

export const maxDuration = 60;

export async function POST(request: Request) {
  let requestBody: PostRequestBody;

  try {
    const json = await request.json();
    requestBody = postRequestBodySchema.parse(json);
  } catch (_) {
    return new ChatSDKError('bad_request:api').toResponse();
  }

  try {
    const {
      id,
      message,
      selectedChatModel,
    }: {
      id: string;
      message: ChatMessage;
      selectedChatModel: ChatModel['id'];
    } = requestBody;

    const uiMessages = [message];

    const { longitude, latitude, city, country } = geolocation(request);

    const requestHints: RequestHints = {
      longitude,
      latitude,
      city,
      country,
    };

    const stream = createUIMessageStream({
      execute: ({ writer: dataStream }) => {
        const result = streamText({
          model: myProvider.languageModel(selectedChatModel),
          system: systemPrompt({ selectedChatModel, requestHints }),
          messages: convertToModelMessages(uiMessages),
          stopWhen: stepCountIs(5),
          experimental_activeTools:
            selectedChatModel === 'o1-mini' || selectedChatModel === 'o1-preview'
              ? []
              : [
                  'requestSuggestions',
                  'getResume',
                  'sendEmail',
                ],
          experimental_transform: smoothStream({ chunking: 'word' }),
          tools: {
            requestSuggestions: requestSuggestions({
              dataStream,
            }),
            getResume,
            sendEmail,
          },
          experimental_telemetry: {
            isEnabled: isProductionEnvironment,
            functionId: 'stream-text',
          },
        });

        result.consumeStream();

        dataStream.merge(
          result.toUIMessageStream({
            sendReasoning: true,
          }),
        );
      },
      generateId: generateUUID,
      onFinish: async ({ messages }) => {
        
      },
      onError: () => {
        return 'Oops, an error occurred!';
      },
    });

    return new Response(stream.pipeThrough(new JsonToSseTransformStream()));
  } catch (error) {
    if (error instanceof ChatSDKError) {
      return error.toResponse();
    }
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new ChatSDKError('bad_request:api').toResponse();
  }

  return Response.json({ id }, { status: 200 });
}
