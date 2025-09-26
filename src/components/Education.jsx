import Section from "./Section";
import { RESUME } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-5">
        {RESUME.education.map((ed, idx) => (
          <article key={idx} className="border border-base-300 rounded-2xl p-5 bg-base-100/70 surface ">
            <header className="flex flex-wrap items-baseline gap-2 justify-between">
              <h3 className="text-lg font-bold">{ed.degree} — {ed.school}</h3>
              <p className="text-sm text-subtle">{ed.start} — {ed.end}</p>
            </header>

            {ed.details?.length > 0 && (
              <ul className="mt-3 list-disc pl-5 space-y-1 text-muted">
                {ed.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
