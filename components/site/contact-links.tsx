import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import { profile } from "@/lib/portfolio";
import { BrandIcon, type BrandColor } from "./brand-icon";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export const channels: {
  label: string;
  value: string;
  icon: IconType;
  color?: BrandColor;
  link: { href: string; target?: string; rel?: string };
}[] = [
  {
    label: "Email",
    value: profile.email,
    icon: TbMail,
    color: { dark: "#ea4335" },
    link: { href: `mailto:${profile.email}` },
  },
  {
    label: "LinkedIn",
    value: "valuhk-januarta-vican",
    icon: FaLinkedin,
    color: { dark: "#2d8cff", light: "#0a66c2" },
    link: { href: profile.linkedin, ...external },
  },
  {
    label: "GitHub",
    value: profile.githubUser,
    icon: FaGithub,
    link: { href: profile.github, ...external },
  },
];

/** Row of contact icons (email, LinkedIn, GitHub); names show as tooltips. */
export function ContactLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-5">
      {channels.map(({ label, value, icon, color, link }) => (
        <li key={label}>
          <a
            {...link}
            aria-label={`${label}: ${value}`}
            title={label}
            className="block transition-transform hover:-translate-y-0.5"
          >
            <BrandIcon icon={icon} color={color} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
