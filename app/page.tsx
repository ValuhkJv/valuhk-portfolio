import { ContactLinks } from "@/components/site/contact-links";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { ProjectList } from "@/components/site/project-list";
import { SectionHeader } from "@/components/site/section-header";
import { SkillIconRow } from "@/components/site/skill-icons";
import { profile, skills } from "@/lib/portfolio";

export default function Home() {
  return (
    <PageShell className="gap-24">
      <section className="flex flex-col gap-5">
        <PageHeader title={profile.name} subtitle={profile.title} />
        <p className="max-w-[560px] text-[15px] text-dim">{profile.intro}</p>
      </section>

      <section aria-labelledby="work-title" className="flex flex-col gap-4">
        <SectionHeader
          id="work-title"
          title="PROJECTS"
          more={{ href: "/projects", label: "All projects" }}
        />
        <ProjectList />
      </section>

      <section aria-labelledby="about-title" className="flex flex-col gap-4">
        <SectionHeader
          id="about-title"
          title="ABOUT"
          more={{ href: "/about", label: "More about me" }}
        />
        <p className="text-dim">{profile.bio}</p>
        <SkillIconRow skills={skills} />
      </section>

      <section aria-labelledby="contact-title" className="flex flex-col gap-4">
        <SectionHeader
          id="contact-title"
          title="CONTACT"
          more={{ href: "/contact", label: "Get in touch" }}
        />
        <p className="text-dim">{profile.responseTime}</p>
        <ContactLinks />
      </section>
    </PageShell>
  );
}
