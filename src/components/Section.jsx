export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4">
        {title && <h2 className="text-2xl md:text-3xl font-extrabold mb-5">{title}</h2>}
        {children}
      </div>
    </section>

  );
}
