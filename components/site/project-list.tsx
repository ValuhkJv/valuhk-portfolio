import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolio";

/** Compact numbered project rows used on the home page. */
export function ProjectList() {
  return (
    <ul>
      {projects.map((project, i) => (
        <li key={project.slug} className="border-t border-line last:border-b">
          <Link href={`/projects/${project.slug}`} className="group flex items-center gap-5 py-5">
            <span className="w-6 shrink-0 font-mono text-[11px] text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <strong className="text-[15px] font-semibold transition-colors group-hover:text-accent">
                {project.title}
              </strong>
              <span className="text-soft">{project.description}</span>
              <span className="font-mono text-xs text-muted">
                {project.technologies.slice(0, 3).join(" · ")} · team of {project.teamSize}
              </span>
            </span>
            <Image
              src={project.cover}
              alt=""
              width={112}
              height={70}
              className="hidden h-[70px] w-[112px] shrink-0 object-cover opacity-85 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 sm:block"
              style={{ objectPosition: project.coverPosition }}
            />
            <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
