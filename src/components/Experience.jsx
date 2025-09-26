import Section from "./Section";
import { RESUME } from "../data/resume";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-5">
        {RESUME.experience.map((e, idx) => (
          <article key={idx} className="border border-base-300 rounded-2xl surface p-5 bg-base-100/70">
            <header className="flex flex-wrap items-baseline gap-2 justify-between">
              <h3 className="text-lg font-bold">{e.role} — {e.company}</h3>
              <p className="text-sm text-subtle">{e.start} — {e.end}</p>
            </header>

            <ul className="mt-3 list-disc pl-5 space-y-1 text-muted [--tw-prose-bullets:theme(colors.base-content/0.7)]">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
