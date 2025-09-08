import { cookies } from 'next/headers';
import { Chat } from '@/components/chat';
import { DataStreamHandler } from '@/components/data-stream-handler';
import { DEFAULT_CHAT_MODEL } from '@/lib/ai/models';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  const cookieStore = await cookies();
  const chatModelFromCookie = cookieStore.get('chat-model');

  if (!chatModelFromCookie) {
    return (
      <>
      <Chat
        id={id}
        initialMessages={[]}
        initialChatModel={DEFAULT_CHAT_MODEL}
        isReadonly={false}
      />
        <DataStreamHandler />
      </>
    );
  }

  return (
    <>
    <Chat
      id={id}
      initialMessages={[]}
      initialChatModel={chatModelFromCookie.value}
      isReadonly={false}
    />
      <DataStreamHandler />
    </>
  );
}
