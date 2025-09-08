import { z } from 'zod';

import type { getResume } from './ai/tools/get-resume';
import type { sendEmail } from './ai/tools/send-email';
import type { requestSuggestions } from './ai/tools/request-suggestions';
import type { InferUITool, UIMessage } from 'ai';



export type DataPart = { type: 'append-message'; message: string };

export const messageMetadataSchema = z.object({
  createdAt: z.string(),
});

export type MessageMetadata = z.infer<typeof messageMetadataSchema>;


type resumeTool = InferUITool<typeof getResume>;
type sendEmailTool = InferUITool<typeof sendEmail>;
type requestSuggestionsTool = InferUITool<
  ReturnType<typeof requestSuggestions>
>;

export type ChatTools = {
  getResume: resumeTool;
  sendEmail: sendEmailTool;
  requestSuggestions: requestSuggestionsTool;
};

export type CustomUIDataTypes = {
  suggestion: any;
  appendMessage: string;
  id: string;
  title: string;
  clear: null;
  finish: null;
};

export type ChatMessage = UIMessage<
  MessageMetadata,
  CustomUIDataTypes,
  ChatTools
>;

export interface Attachment {
  name: string;
  url: string;
  contentType: string;
}

export type ArtifactKind = 'code' | 'text' | 'image' | 'sheet';

export interface UIArtifact {
  documentId: string;
  content: string;
  kind: ArtifactKind;
  title: string;
  status: 'idle' | 'streaming' | 'done' | 'failed';
  isVisible: boolean;
  boundingBox: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  onStreamPart?: (args: {
    streamPart: any;
    setArtifact: (updater: UIArtifact | ((curr: UIArtifact) => UIArtifact)) => void;
    setMetadata: (data: any) => void;
  }) => void;
}
