import Link from "next/link";

type SectionHeaderProps = {
  id: string;
  title: string;
  /** Optional "see more" link to the section's own page. */
  more?: { href: string; label: string };
};

export function SectionHeader({ id, title, more }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h2 id={id} className="section-label">
        {title}
      </h2>
      {more && (
        <Link href={more.href} className="link text-xs text-muted">
          {more.label} →
        </Link>
      )}
    </div>
  );
}
