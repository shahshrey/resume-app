'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { memo } from 'react';
import type { UseChatHelpers } from '@ai-sdk/react';
import type { ChatMessage } from '@/lib/types';

interface SuggestedActionsProps {
  chatId: string;
  sendMessage: UseChatHelpers<ChatMessage>['sendMessage'];
}

function PureSuggestedActions({
  chatId,
  sendMessage,
}: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: "Show Shrey's full",
      label: 'resume',
      action: "Show me Shrey's full resume",
    },
    {
      title: 'Send an email',
      label: 'to Shrey',
      action: 'I want to send an email to Shrey about a potential opportunity',
    },
    {
      title: "What are Shrey's",
      label: 'AI/ML skills?',
      action: "What are Shrey's skills in AI and machine learning?",
    },
    {
      title: 'How can Shrey help',
      label: 'with our AI projects?',
      action: 'How can Shrey help with our AI and LLM projects based on his experience?',
    },
    {
      title: 'Schedule a meeting',
      label: 'with Shrey',
      action: 'I want to schedule a meeting with Shrey',
    },
    {
      title: 'Listen to Shrey\'s AI generated podcast',
      label: 'in his voice',
      action: 'I want to listen to Shrey\'s AI generated podcast',
    },
  ];

  return (
    <div
      data-testid="suggested-actions"
      className="grid sm:grid-cols-2 gap-2 w-full"
    >
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, '', `/chat/${chatId}`);

              sendMessage({
                role: 'user',
                parts: [{ type: 'text', text: suggestedAction.action }],
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(
  PureSuggestedActions,
  (prevProps, nextProps) => {
    if (prevProps.chatId !== nextProps.chatId) return false;

    return true;
  },
);
