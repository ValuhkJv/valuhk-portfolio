import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-3 text-xs text-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>{profile.location}</span>
    </footer>
  );
}
