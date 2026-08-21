import { Link } from "@tanstack/react-router";

function Footer() {
  return (
    <footer className="border-t border-[#ddd9cd] px-8 py-12 mt-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between">
        <div>
          <h3 className="font-display text-xl font-bold">
            Omkar Mahtole<span className="text-clay">.</span>
          </h3>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">
            Building intelligent systems, one experiment at a time.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div>
            <p className="text-gray-400 mb-3 text-xs tracking-widest">EXPLORE</p>
            <ul className="space-y-2">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-gray-400 mb-3 text-xs tracking-widest">CONNECT</p>
            <ul className="space-y-2">
              <li><a href="https://github.com/omkar162004" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/omkarmahtole" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/osm_1654" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="mailto:Omkar162004@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:justify-between text-xs text-gray-400 mt-12 pt-6 border-t border-[#ddd9cd]">
        <p>© 2026 Omkar Mahtole. All rights reserved.</p>
        <p>Bengaluru, India</p>
      </div>
    </footer>
  );
}

export default Footer;