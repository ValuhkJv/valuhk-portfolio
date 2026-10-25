import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { SkillIconGrid } from "@/components/site/skill-icons";
import { profile, projects, skillGroups } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: `${profile.name} — ${profile.role} from ${profile.location}.`,
};

const details = [
  ["Based in", profile.location],
  ["Education", profile.education],
  ["Focus", "Full stack web development & UI/UX design"],
];

export default function AboutPage() {
  return (
    <PageShell className="gap-16">
      <PageHeader title="About" subtitle={profile.role} />

      <section className="flex flex-col gap-4 text-[15px] text-dim">
        <p>{profile.intro}</p>
        <p>{profile.bio}</p>
        <a href={profile.cv} download={profile.cvFileName} className="link self-start text-accent">
          Download CV ↓
        </a>
      </section>

      <section aria-labelledby="details-title" className="flex flex-col gap-4">
        <h2 id="details-title" className="section-label">
          DETAILS
        </h2>
        <dl className="flex flex-col gap-2">
          {details.map(([label, value]) => (
            <div key={label} className="flex gap-6">
              <dt className="w-24 shrink-0 text-muted">{label}</dt>
              <dd className="text-dim">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="skills-title" className="flex flex-col gap-4">
        <h2 id="skills-title" className="section-label">
          SKILLS
        </h2>
        <div className="flex flex-col gap-3.5">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-1.5">
              <h3 className="text-muted">{group.label}</h3>
              <SkillIconGrid skills={group.items} />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="experience-title" className="flex flex-col gap-4">
        <h2 id="experience-title" className="section-label">
          EXPERIENCE
        </h2>
        <ul>
          {projects.map((project) => (
            <li key={project.slug} className="border-t border-line last:border-b">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-baseline justify-between gap-4 py-3"
              >
                <span className="font-semibold transition-colors group-hover:text-accent">
                  {project.title}
                </span>
                <span className="shrink-0 font-mono text-xs text-muted">
                  team of {project.teamSize} · {project.timeline}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
