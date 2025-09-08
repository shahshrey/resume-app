import type { Suggestion } from './schema';

export async function getSuggestionsByDocumentId({
  documentId,
}: {
  documentId: string;
}): Promise<Suggestion[]> {
  return [];
}
