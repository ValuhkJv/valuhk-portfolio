import { SiteFooter } from "./site-footer";

/** Shared page column; pass the vertical gap between sections via className. */
export function PageShell({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main className={`mx-auto flex max-w-[640px] flex-col px-6 pb-40 pt-24 ${className}`}>
      {children}
      <SiteFooter />
    </main>
  );
}
