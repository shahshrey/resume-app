export const DEFAULT_CHAT_MODEL: string = 'gpt-4o-mini';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gpt-oss-120b',
    name: 'GPT-OSS-120B',
    description: 'OpenAI GPT-OSS-120B model via Groq',
  },
];
