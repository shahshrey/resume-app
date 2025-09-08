'use client';
import cx from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { memo, useState } from 'react';
import { PencilEditIcon, SparklesIcon } from './icons';
import { Markdown } from './markdown';
import { MessageActions } from './message-actions';
import { PreviewAttachment } from './preview-attachment';
import { ResumeSummary } from './resume-summary';
import { ResumeExperience } from './resume-experience';
import { ResumeSkills } from './resume-skills';
import { ResumeEducation } from './resume-education';
import { ResumeFull } from './resume-full';
import { EmailForm } from './email-form';
import equal from 'fast-deep-equal';
import { cn, sanitizeText } from '@/lib/utils';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { MessageEditor } from './message-editor'; 
import { MessageReasoning } from './message-reasoning';
import type { UseChatHelpers } from '@ai-sdk/react';
import type { ChatMessage } from '@/lib/types';
import { useDataStream } from './data-stream-provider';

// Type narrowing is handled by TypeScript's control flow analysis
// The AI SDK provides proper discriminated unions for tool calls

const PurePreviewMessage = ({
  chatId,
  message,
  vote,
  isLoading,
  setMessages,
  regenerate,
  sendMessage,
  isReadonly,
  requiresScrollPadding,
}: {
  chatId: string;
  message: ChatMessage;
  vote: any | undefined;
  isLoading: boolean;
  setMessages: UseChatHelpers<ChatMessage>['setMessages'];
  regenerate: UseChatHelpers<ChatMessage>['regenerate'];
  sendMessage?: UseChatHelpers<ChatMessage>['sendMessage'];
  isReadonly: boolean;
  requiresScrollPadding: boolean;
}) => {
  const [mode, setMode] = useState<'view' | 'edit'>('view');

  const attachmentsFromMessage = message.parts.filter(
    (part) => part.type === 'file',
  );

  useDataStream();

  return (
    <AnimatePresence>
      <motion.div
        data-testid={`message-${message.role}`}
        className="w-full mx-auto max-w-3xl px-4 group/message"
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        data-role={message.role}
      >
        <div
          className={cn(
            'flex gap-4 w-full group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl',
            {
              'w-full': mode === 'edit',
              'group-data-[role=user]/message:w-fit': mode !== 'edit',
            },
          )}
        >
          {message.role === 'assistant' && (
            <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border bg-background">
              <div className="translate-y-px">
                <SparklesIcon size={14} />
              </div>
            </div>
          )}

          <div
            className={cn('flex flex-col gap-4 w-full', {
              'min-h-96': message.role === 'assistant' && requiresScrollPadding,
            })}
          >
            {attachmentsFromMessage.length > 0 && (
              <div
                data-testid={`message-attachments`}
                className="flex flex-row justify-end gap-2"
              >
                {attachmentsFromMessage.map((attachment) => (
                  <PreviewAttachment
                    key={attachment.url}
                    attachment={{
                      name: attachment.filename ?? 'file',
                      contentType: attachment.mediaType,
                      url: attachment.url,
                    }}
                  />
                ))}
              </div>
            )}

            {message.parts?.map((part, index) => {
              const { type } = part;
              const key = `message-${message.id}-part-${index}`;

              if (type === 'reasoning' && part.text?.trim().length > 0) {
                return (
                  <MessageReasoning
                    key={key}
                    isLoading={isLoading}
                    reasoning={part.text}
                  />
                );
              }

              if (type === 'text') {
                if (mode === 'view') {
                  return (
                    <div key={key} className="flex flex-row gap-2 items-start">
                      {message.role === 'user' && !isReadonly && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              data-testid="message-edit-button"
                              variant="ghost"
                              className="px-2 h-fit rounded-full text-muted-foreground opacity-0 group-hover/message:opacity-100"
                              onClick={() => {
                                setMode('edit');
                              }}
                            >
                              <PencilEditIcon />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Edit message</TooltipContent>
                        </Tooltip>
                      )}

                      <div
                        data-testid="message-content"
                        className={cn('flex flex-col gap-4', {
                          'bg-primary text-primary-foreground px-3 py-2 rounded-xl':
                            message.role === 'user',
                        })}
                      >
                        <Markdown>{sanitizeText(part.text)}</Markdown>
                      </div>
                    </div>
                  );
                }

                if (mode === 'edit') {
                  return (
                    <div key={key} className="flex flex-row gap-2 items-start">
                      <div className="size-8" />

                      <MessageEditor
                        key={message.id}
                        message={message}
                        setMode={setMode}
                        setMessages={setMessages}
                        regenerate={regenerate}
                      />
                    </div>
                  );
                }
              }

              if (type === 'tool-sendEmail') {
                const { toolCallId, state } = part;

                if (state === 'output-available') {
                  const { output } = part;
                  if (output && typeof output === 'object' && 'type' in output && output.type === 'show_form') {
                    return (
                      <div key={toolCallId}>
                        <EmailForm chatId={chatId} sendMessage={sendMessage} />
                      </div>
                    );
                  }
                }
              }

              if (type === 'tool-getResume') {
                const { toolCallId, state } = part;

                if ('input' in part) {
                  return (
                    <div key={toolCallId} className="skeleton">
                      <ResumeSummary />
                    </div>
                  );
                }

                if (state === 'output-available') {
                  const { output } = part;
                  const outputAny = output as any;
                  
                  if (outputAny && typeof outputAny === 'object' && 'type' in outputAny) {
                    if (outputAny.type === 'markdown' && 'content' in outputAny) {
                      return (
                        <div key={toolCallId}>
                          <ResumeFull resumeContent={String(outputAny.content)} />
                        </div>
                      );
                    }
                    
                    if (outputAny.type === 'error' && 'message' in outputAny) {
                      return (
                        <div key={toolCallId} className="text-red-500 p-2 border rounded">
                          Error: {String(outputAny.message)}
                        </div>
                      );
                    }
                  }
                  
                  if (output && typeof output === 'object' && 'experience' in output && !('summary' in output) && !('type' in output)) {
                    return (
                      <div key={toolCallId}>
                        <ResumeExperience experienceData={output as any} />
                      </div>
                    );
                  }
                  
                  if (output && typeof output === 'object' && 'skills' in output && !('summary' in output) && !('type' in output)) {
                    return (
                      <div key={toolCallId}>
                        <ResumeSkills skillsData={output as any} />
                      </div>
                    );
                  }
                  
                  if (output && typeof output === 'object' && 'education' in output && !('summary' in output) && !('type' in output)) {
                    return (
                      <div key={toolCallId}>
                        <ResumeEducation educationData={output as any} />
                      </div>
                    );
                  }
                  
                  if (output && typeof output === 'object' && !('type' in output)) {
                    return (
                      <div key={toolCallId}>
                        <ResumeSummary resumeData={output as any} />
                      </div>
                    );
                  }
                  
                  return null;
                }
              }

              if (type === 'tool-listenPodcast') {
                const { toolCallId, state } = part;

                if (state === 'output-available') {
                  const { output } = part as any;
                  if (
                    output &&
                    typeof output === 'object' &&
                    'type' in output &&
                    output.type === 'audio' &&
                    'src' in output
                  ) {
                    return (
                      <div key={toolCallId} className="w-full">
                        <audio controls className="w-full">
                          <source src={String(output.src)} type="audio/mpeg" />
                        </audio>
                      </div>
                    );
                  }
                }
              }

              if (type === 'tool-sendEmail') {
                const { toolCallId, state } = part;

                if ('input' in part) {
                  const { input } = part;
                  return (
                    <div key={toolCallId}>
                      {/* <DocumentPreview isReadonly={isReadonly} args={input} /> */}
                    </div>
                  );
                }

                if (state === 'output-available') {
                  const { output } = part;

                  const outputAny2 = output as any;
                  if (outputAny2 && typeof outputAny2 === 'object' && 'error' in outputAny2) {
                    return (
                      <div
                        key={toolCallId}
                        className="text-red-500 p-2 border rounded"
                      >
                        Error: {String(outputAny2.error)}
                      </div>
                    );
                  }

                  return (
                    <div key={toolCallId}>
                      {/* <DocumentPreview
                        isReadonly={isReadonly}
                        result={output}
                      /> */}
                    </div>
                  );
                }
              }

              if (type === 'tool-sendEmail') {
                const { toolCallId, state } = part;

                if ('input' in part) {
                  const { input } = part;

                  return (
                    <div key={toolCallId}>
                      {/* <DocumentToolCall
                        type="update"
                        args={input}
                        isReadonly={isReadonly}
                      /> */}
                    </div>
                  );
                }

                if (state === 'output-error') {
                  const { errorText } = part;

                  if (errorText) {
                    return (
                      <div
                        key={toolCallId}
                        className="text-red-500 p-2 border rounded"
                      >
                          Error: {String(errorText)}
                      </div>
                    );
                  }

                  return (
                    <div key={toolCallId}>
                      {/* <DocumentToolResult
                        type="update"
                        result={output as { id: string; title: string; kind: 'code' | 'text' | 'image' | 'sheet'; content: string; }}
                        isReadonly={isReadonly}
                      /> */}
                    </div>
                  );
                }
              }

              if (type === 'tool-requestSuggestions') {
                const { toolCallId, state } = part;

                if ('input' in part) {
                  const { input } = part;
                  return (
                    <div key={toolCallId}>
                      {/* <DocumentToolCall
                        type="request-suggestions"
                        args={input}
                        isReadonly={isReadonly}
                      /> */}
                    </div>
                  );
                }

                if (state === 'output-available') {
                  const { output } = part;

                  const outputAny3 = output as any;
                  if (outputAny3 && typeof outputAny3 === 'object' && 'error' in outputAny3) {
                    return (
                      <div
                        key={toolCallId}
                        className="text-red-500 p-2 border rounded"
                      >
                        Error: {String(outputAny3.error)}
                      </div>
                    );
                  }

                  return (
                    <div key={toolCallId}>
                      {/* <DocumentToolResult
                        type="request-suggestions"
                        result={output as { id: string; title: string; kind: 'code' | 'text' | 'image' | 'sheet'; message: string; }}
                        isReadonly={isReadonly}
                      /> */}
                    </div>
                  );
                }
              }
            })}

            {!isReadonly && (
              <MessageActions
                key={`action-${message.id}`}
                chatId={chatId}
                message={message}
                vote={vote}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const PreviewMessage = memo(
  PurePreviewMessage,
  (prevProps, nextProps) => {
    if (prevProps.isLoading !== nextProps.isLoading) return false;
    if (prevProps.message.id !== nextProps.message.id) return false;
    if (prevProps.requiresScrollPadding !== nextProps.requiresScrollPadding)
      return false;
    if (!equal(prevProps.message.parts, nextProps.message.parts)) return false;
    if (!equal(prevProps.vote, nextProps.vote)) return false;

    return false;
  },
);

export const ThinkingMessage = () => {
  const role = 'assistant';

  return (
    <motion.div
      data-testid="message-assistant-loading"
      className="w-full mx-auto max-w-3xl px-4 group/message min-h-96"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      data-role={role}
    >
      <div
        className={cx(
          'flex gap-4 group-data-[role=user]/message:px-3 w-full group-data-[role=user]/message:w-fit group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl',
          {
            'group-data-[role=user]/message:bg-muted': true,
          },
        )}
      >
        <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
          <SparklesIcon size={14} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-4 text-muted-foreground">
            Hmm...
          </div>
        </div>
      </div>
    </motion.div>
  );
};
