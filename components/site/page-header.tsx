/** Name-style heading: a short bold title with an optional muted subtitle. */
export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-base font-semibold leading-none text-strong md:text-lg">{title}</h1>
      {subtitle && <p className="font-medium leading-tight text-muted">{subtitle}</p>}
    </header>
  );
}
