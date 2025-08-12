import EmbedClient from './EmbedClient';

export const dynamic = 'force-dynamic';

export default function QEmbedPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const variant = (searchParams.variant as string) || 'default';
  const tunnelId = (searchParams.tunnel as string) || 'capture';
  return (
    <div className="p-4">
      <EmbedClient variant={variant} tunnelId={tunnelId} />
    </div>
  );
}


