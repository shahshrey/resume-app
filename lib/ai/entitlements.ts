import type { ChatModel } from './models';

interface Entitlements {
  availableChatModelIds: Array<ChatModel['id']>;
}

export const defaultEntitlements: Entitlements = {
  availableChatModelIds: [
    'gpt-oss-120b'
  ],
};
