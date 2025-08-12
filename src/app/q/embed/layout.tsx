export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="m-0 p-0 bg-transparent">{children}</div>;
}
