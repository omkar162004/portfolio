import { Link } from "@tanstack/react-router";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative px-8 py-5 border-b border-[#ddd9cd]">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold font-display">
          Omkar<span className="text-clay">.</span>
        </div>

        {/* Desktop links — hidden on mobile */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blogs</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-block bg-ink text-white text-sm px-5 py-2 rounded-full"
          >
            Contact me
          </Link>

          {/* Hamburger button — only visible on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu — only renders when isOpen is true */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-5 text-sm">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-ink text-white text-sm px-5 py-2 rounded-full text-center"
          >
            Contact me
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;