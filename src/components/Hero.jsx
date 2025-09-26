import { RESUME } from "../data/resume";

export default function Hero() {
  return (
    <section className="pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <p className="uppercase tracking-widest text-xs text-neutral-500 dark:text-neutral-400">Hello, I’m</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{RESUME.name}</h1>
          <h2 className="text-xl md:text-2xl text-primary dark:text-primary mt-2">{RESUME.role}</h2>
          <p className="text-muted max-w-2xl">{RESUME.about}</p>
          <div className="mt-6 flex gap-3 flex-wrap">
            {RESUME.links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border rounded-lg hover:bg-base-200 dark:hover:bg-base-200 border-neutral-300 dark:border-base-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-neutral-100 dark:bg-base-200 border border-neutral-300 dark:border-base-300" />
        </div>
      </div>
    </section>
  );
}
