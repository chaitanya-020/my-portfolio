import { useEffect, useRef, useState } from "react";

/**
 * Animated modal:
 * - Backdrop fades
 * - Panel scales from 95% -> 100%
 * - Plays exit animation before unmounting
 * - ESC / outside click / ✕ closes
 */
export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const [show, setShow] = useState(false);      // drives enter/exit CSS

  // enter animation + scroll lock
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    setShow(true); // trigger enter
    dialogRef.current?.focus();

    const onKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    // play exit animation then unmount
    setShow(false);
    setTimeout(onClose, 150); // keep in sync with duration classes
  };

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8
                  transition-opacity duration-150
                  ${show ? "opacity-100" : "opacity-0"}
                  bg-black/60 backdrop-blur-sm`}
      onClick={onBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="project-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`w-full max-w-3xl rounded-2xl border border-base-300
                    bg-base-100 text-base-content shadow-2xl outline-none
                    transition-all duration-150
                    ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-5 border-b border-base-300">
          <div>
            <h3 id="project-title" className="text-xl md:text-2xl font-extrabold">
              {project.title}
            </h3>
            <p className="mt-1 text-base-content">{project.description}</p>
          </div>
          <button
            onClick={handleClose}
            className="rounded-lg border border-base-300 px-3 py-1.5 text-sm hover:bg-base-200"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5">
          {Array.isArray(project.details) && project.details.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1 text-base-content">
              {project.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          ) : project.long ? (
            <p className="text-base-content leading-relaxed">{project.long}</p>
          ) : null}

          {project.tags?.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-base-300 bg-base-200 text-base-content"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          {(project.link || project.repo) && (
            <div className="flex gap-3 pt-1">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-base-300 hover:bg-base-200"
                >
                  Live
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-base-300 hover:bg-base-200"
                >
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
