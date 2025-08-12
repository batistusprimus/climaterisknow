import EmbedClient from './EmbedClient';

export const dynamic = 'force-dynamic';

type SearchParams = Record<string, string | string[] | undefined>;

export default async function QEmbedPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const variant = (sp?.variant as string) || 'default';
  const tunnelId = (sp?.tunnel as string) || 'capture';
  return (
    <div className="p-4">
      <EmbedClient variant={variant} tunnelId={tunnelId} />
    </div>
  );
}


