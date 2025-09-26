import { RESUME } from "../data/resume";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-10 py-12 md:py-14 bg-neutral-50 dark:bg-neutral-950 border-top border-base-300 dark:border-base-300 border-t"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">Contact</h2>
        <div className="space-y-2 text-base-content/80 dark:text-base-content">
          {RESUME.email && (
            <p>Email: <a className="underline" href={`mailto:${RESUME.email}`}>{RESUME.email}</a></p>
          )}
          {RESUME.linkedin && (
            <p>LinkedIn: <a className="underline" href={RESUME.linkedin} target="_blank" rel="noreferrer">{RESUME.linkedin}</a></p>
          )}
          {RESUME.github && (
            <p>GitHub: <a className="underline" href={RESUME.github} target="_blank" rel="noreferrer">{RESUME.github}</a></p>
          )}
          {RESUME.website && (
            <p>Website: <a className="underline" href={RESUME.website} target="_blank" rel="noreferrer">{RESUME.website}</a></p>
          )}
          {RESUME.location && <p>Location: {RESUME.location}</p>}
        </div>
      </div>
    </section>
  );
}
