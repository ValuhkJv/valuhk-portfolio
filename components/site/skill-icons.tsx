import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import {
  SiDotnet,
  SiExpress,
  SiFigma,
  SiGit,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BrandIcon, type BrandColor } from "./brand-icon";

const REACT: BrandColor = { dark: "#61dafb", light: "#149eca" };

// Brand colors; `light` replaces ones that lack contrast on white.
// No color means the logo follows the text color (black logos).
const ICONS: Record<string, { icon: IconType; color?: BrandColor }> = {
  React: { icon: SiReact, color: REACT },
  "Next.js": { icon: SiNextdotjs },
  TypeScript: { icon: SiTypescript, color: { dark: "#3178c6" } },
  "Tailwind CSS": { icon: SiTailwindcss, color: { dark: "#06b6d4", light: "#0891b2" } },
  "Node.js": { icon: SiNodedotjs, color: { dark: "#5fa04e" } },
  Express: { icon: SiExpress },
  Laravel: { icon: SiLaravel, color: { dark: "#ff2d20" } },
  "ASP.NET Core": { icon: SiDotnet, color: { dark: "#8a6cff", light: "#512bd4" } },
  Python: { icon: SiPython, color: { dark: "#4b8bbe", light: "#3776ab" } },
  "REST APIs": { icon: TbApi, color: { dark: "var(--accent)" } },
  PostgreSQL: { icon: SiPostgresql, color: { dark: "#4169e1" } },
  MySQL: { icon: SiMysql, color: { dark: "#4479a1" } },
  MongoDB: { icon: SiMongodb, color: { dark: "#47a248" } },
  "SQL Server": { icon: DiMsqlServer, color: { dark: "#cc2927" } },
  "React Native": { icon: SiReact, color: REACT },
  Figma: { icon: SiFigma, color: { dark: "#f24e1e" } },
  Git: { icon: SiGit, color: { dark: "#f05032" } },
  Postman: { icon: SiPostman, color: { dark: "#ff6c37" } },
};

function SkillIcon({ name, className }: { name: string; className: string }) {
  const entry = ICONS[name];
  return entry ? <BrandIcon icon={entry.icon} color={entry.color} className={className} /> : null;
}

/** Compact row of colored tech logos; the name shows as a tooltip. */
export function SkillIconRow({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-3">
      {skills.map((name) => (
        <li key={name} title={name} className="transition-transform hover:-translate-y-0.5">
          <SkillIcon name={name} className="size-3.5" />
          <span className="sr-only">{name}</span>
        </li>
      ))}
    </ul>
  );
}

/** Wrapping chips: colored tech logo with its name beside it. */
export function SkillIconGrid({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {skills.map((name) => (
        <li
          key={name}
          className="flex items-center gap-1.5 rounded-md border border-line px-2 py-1 transition-colors hover:border-muted"
        >
          <SkillIcon name={name} className="size-3 shrink-0" />
          <span className="text-[11px] leading-none text-dim">{name}</span>
        </li>
      ))}
    </ul>
  );
}
