import { generateId, type ModelMessage } from 'ai';
import type { LanguageModelV2StreamPart } from '@ai-sdk/provider';

export function compareMessages(
  firstMessage: ModelMessage,
  secondMessage: ModelMessage,
): boolean {
  if (firstMessage.role !== secondMessage.role) return false;

  if (
    !Array.isArray(firstMessage.content) ||
    !Array.isArray(secondMessage.content)
  ) {
    return false;
  }

  if (firstMessage.content.length !== secondMessage.content.length) {
    return false;
  }

  for (let i = 0; i < firstMessage.content.length; i++) {
    const item1 = firstMessage.content[i];
    const item2 = secondMessage.content[i];

    if (item1.type !== item2.type) return false;

    if (item1.type === 'file' && item2.type === 'file') {
      // if (item1.image.toString() !== item2.image.toString()) return false;
      // if (item1.mimeType !== item2.mimeType) return false;
    } else if (item1.type === 'text' && item2.type === 'text') {
      if (item1.text !== item2.text) return false;
    } else if (item1.type === 'tool-result' && item2.type === 'tool-result') {
      if (item1.toolCallId !== item2.toolCallId) return false;
    } else {
      return false;
    }
  }

  return true;
}

const textToDeltas = (text: string): LanguageModelV2StreamPart[] => {
  const id = generateId();

  const deltas = text.split(' ').map((char) => ({
    id,
    type: 'text-delta' as const,
    delta: `${char} `,
  }));

  return [{ id, type: 'text-start' }, ...deltas, { id, type: 'text-end' }];
};

const reasoningToDeltas = (text: string): LanguageModelV2StreamPart[] => {
  const id = generateId();

  const deltas = text.split(' ').map((char) => ({
    id,
    type: 'reasoning-delta' as const,
    delta: `${char} `,
  }));

  return [
    { id, type: 'reasoning-start' },
    ...deltas,
    { id, type: 'reasoning-end' },
  ];
};
