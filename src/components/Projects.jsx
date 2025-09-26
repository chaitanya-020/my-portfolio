import { useState } from "react";
import Section from "./Section";
import { RESUME } from "../data/resume";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const open = (p) => setSelected(p);
  const close = () => setSelected(null);

  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 gap-6">
        {RESUME.projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl bg-base-100/70 surface surface-hover flex flex-col justify-between p-5 transition-transform duration-300"
          >
            <header className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold">{p.title}</h3>

                <div className="flex gap-2 shrink-0">
                    {p.link && (
                    <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        title="Open live demo"
                        className="text-xs px-2 py-1 rounded-full border border-base-300 hover:bg-base-200"
                        // prevent the card's onClick from opening the modal
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                    >
                        Live
                    </a>
                    )}
                    {p.repo && (
                    <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        title="Open source code"
                        className="text-xs px-2 py-1 rounded-full border border-base-300 hover:bg-base-200"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                    >
                        Code
                    </a>
                    )}
                </div>
            </header>


            <p className="mt-2 text-muted">{p.description}</p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-base-300 bg-base-200 text-base-content"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* View all details button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => open(p)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open(p)}
                className="px-3 py-1.5 rounded-lg border border-base-300 hover:bg-base-200 text-sm"
                aria-label={`View all details for ${p.title}`}
              >
                View all details
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={close} />}
    </Section>
  );
}
