import {
  customProvider,
} from 'ai';
// import { openai } from '@ai-sdk/openai';
import { createGroq } from '@ai-sdk/groq';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import { isTestEnvironment } from '../constants';

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'gpt-4o': chatModel,
        'gpt-4o-mini': chatModel,
        'o1-mini': reasoningModel,
        'o1-preview': reasoningModel,
        'gpt-oss-120b': chatModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        // 'gpt-4o': openai('gpt-4o'),
        // 'gpt-4o-mini': openai('gpt-4o-mini'),
        // 'o1-mini': wrapLanguageModel({
        //   model: openai('o1-mini'),
        //   middleware: extractReasoningMiddleware({ tagName: 'think' }),
        // }),
        // 'o1-preview': wrapLanguageModel({
        //   model: openai('o1-preview'),
        //   middleware: extractReasoningMiddleware({ tagName: 'think' }),
        // }),
        'gpt-oss-120b': groq('openai/gpt-oss-120b'),
        // 'title-model': openai('gpt-4o-mini'),
        // 'artifact-model': openai('gpt-4o'),
      },
    });
