import { RESUME } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-500 flex flex-wrap justify-between gap-2">
        <p>© {new Date().getFullYear()} {RESUME.name}. All rights reserved.</p>
        <a href="#top" className="underline">Back to top</a>
      </div>
    </footer>
  );
}
