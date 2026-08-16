import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
      <div className="text-xl font-bold">
        Aarav<span className="text-orange-600">.</span>
      </div>

      <nav className="flex gap-8 text-sm">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="/projects">Projects</a>
        <a href="/blog">Blogs</a>
      </nav>

      <Link
        to="/contact"
        className="bg-black text-white text-sm px-5 py-2 rounded-full"
>       Contact me
      </Link>
    </header>
  );
}

export default Navbar;