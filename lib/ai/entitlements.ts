import type { ChatModel } from './models';

interface Entitlements {
  availableChatModelIds: Array<ChatModel['id']>;
}

export const defaultEntitlements: Entitlements = {
  availableChatModelIds: [
    'gpt-4o', 
    'gpt-4o-mini', 
    'o1-mini', 
    'o1-preview',
    'gpt-oss-120b'
  ],
};
