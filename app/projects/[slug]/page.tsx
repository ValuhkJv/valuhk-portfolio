import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/page-shell";
import { getProject, projects } from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <PageShell className="gap-16">
      <Link href="/projects" className="link self-start">
        ← All projects
      </Link>

      <header className="flex flex-col gap-4">
        <span className="section-label">
          PROJECT {String(index + 1).padStart(2, "0")} · TEAM OF {project.teamSize} ·{" "}
          {project.timeline.toUpperCase()}
        </span>
        <h1 className="text-xl font-semibold leading-snug tracking-[-0.015em]">
          {project.title}
        </h1>
        <p className="text-[15px] text-dim">{project.longDescription}</p>
        <p className="font-mono text-xs leading-relaxed text-muted">{project.technologies.join(" / ")}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link self-start text-accent"
        >
          View source on GitHub ↗
        </a>
      </header>

      <section aria-labelledby="features-title" className="flex flex-col gap-4">
        <h2 id="features-title" className="section-label">
          FEATURES
        </h2>
        <ul>
          {project.features.map((feature) => (
            <li key={feature} className="border-t border-line py-3 text-dim last:border-b">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="screens-title" className="flex flex-col gap-4">
        <h2 id="screens-title" className="section-label">
          SCREENSHOTS
        </h2>
        <div className="flex flex-col gap-4">
          {project.screenshots.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-line transition-colors hover:border-muted"
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                width={1600}
                height={1000}
                sizes="(min-width: 640px) 592px, 100vw"
                className="h-auto w-full"
              />
            </a>
          ))}
        </div>
      </section>

      <nav
        aria-label="More projects"
        className="flex flex-wrap justify-between gap-4 border-t border-line pt-8 text-sm"
      >
        <Link href={`/projects/${prev.slug}`} className="link">
          ← {prev.title}
        </Link>
        <Link href={`/projects/${next.slug}`} className="link">
          {next.title} →
        </Link>
      </nav>
    </PageShell>
  );
}
