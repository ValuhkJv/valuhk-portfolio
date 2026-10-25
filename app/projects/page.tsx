import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { profile, projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: `Team-built web apps by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <PageShell className="gap-16">
      <PageHeader title="Projects" subtitle="Team projects built from database to interface" />

      <ul className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="relative aspect-[16/10] w-full max-w-[320px] shrink-0 overflow-hidden rounded-md border border-line transition-colors group-hover:border-muted sm:w-[200px]">
                <Image
                  src={project.cover}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 640px) 200px, 320px"
                  className="object-cover opacity-90 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                  style={{ objectPosition: project.coverPosition }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="section-label">
                  {String(i + 1).padStart(2, "0")} · TEAM OF {project.teamSize} ·{" "}
                  {project.timeline.toUpperCase()}
                </span>
                <h2 className="text-[15px] font-semibold transition-colors group-hover:text-accent">
                  {project.title} <span aria-hidden="true">→</span>
                </h2>
                <p className="text-dim">{project.description}</p>
                <p className="font-mono text-xs leading-relaxed text-muted">
                  {project.technologies.join(" / ")}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
