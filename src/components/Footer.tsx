function Footer() {
  return (
    <footer className="border-t border-[#ddd9cd] px-8 py-12 mt-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold">
            Aarav Mehta<span className="text-orange-600">.</span>
          </h3>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">
            Building intelligent systems, one experiment at a time.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div>
            <p className="text-gray-400 mb-3 text-xs tracking-widest">EXPLORE</p>
            <ul className="space-y-2">
              <li>About</li>
              <li>Projects</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-400 mb-3 text-xs tracking-widest">CONNECT</p>
            <ul className="space-y-2">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-12 pt-6 border-t border-[#ddd9cd]">
        <p>© 2026 Aarav Mehta. All rights reserved.</p>
        <p>Bengaluru, India</p>
      </div>
    </footer>
  );
}

export default Footer;