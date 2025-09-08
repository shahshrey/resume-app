export interface Chat {
  id: string;
  title: string;
  userId: string;
  createdAt: Date;
  messages: any[];
  visibility?: 'private' | 'public';
}

export interface Document {
  id: string;
  title: string;
  content?: string;
  kind?: 'code' | 'text' | 'image' | 'sheet';
  userId: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Suggestion {
  id: string;
  documentId: string;
  originalText: string;
  suggestedText: string;
  description?: string;
  isResolved: boolean;
  userId: string;
  createdAt: Date;
}

export interface Vote {
  id: string;
  messageId: string;
  isUpvote: boolean;
  userId: string;
  createdAt: Date;
}
