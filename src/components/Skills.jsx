import Section from "./Section";
import { RESUME } from "../data/resume";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-2">
        {RESUME.skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1 rounded-full border border-base-300 dark:border-base-300
                       bg-white dark:bg-base-200
                       text-base-content/80 dark:text-base-content"
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
