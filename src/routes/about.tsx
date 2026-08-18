import { createRoute, Link } from "@tanstack/react-router";
import { rootRoute } from "./root";

function AboutPage() {
  return (
    <div>
      {/* Intro section */}
      <section className="px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-4">ABOUT ME</p>
          <h1 className="font-display text-5xl font-bold leading-tight">
            Curious about how data becomes decisions.
          </h1>
          <p className="text-gray-500 mt-6 max-w-md">
            Hi, I'm Omkar — an ai / ml engineering student based in Chhatrapati Sambhaji Nagar,
            India. I spend most of my time training models, reading papers,
            and turning rough ideas into working prototypes.
          </p>
          <p className="text-gray-500 mt-4 max-w-md">
            My interests sit at the intersection of deep learning and
            real-world deployment: making models that are not just accurate,
            but fast, reliable and genuinely useful.
          </p>
        </div>

        <div className="bg-cream-dark rounded-2xl h-80 flex items-center justify-center text-gray-300">
          Image / illustration goes here
        </div>
      </section>

      {/* Info strip */}
      <section className="px-8">
        <div className="bg-cream-dark rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-8 p-8">
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-2">EDUCATION</p>
            <p className="font-medium">B.Tech, Artificial Intelligence & Machine Learning</p>
            <p className="text-sm text-gray-400 mt-1">Class of 2026</p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-2">BASED IN</p>
            <p className="font-medium">Chhatrapati Sambhajinagar, India</p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-2">FOCUS</p>
            <p className="font-medium">Deep learning · NLP · Computer vision</p>
          </div>
        </div>
      </section>

      {/* Skills & tools */}
      <section className="px-8 py-20">
        <p className="text-xs tracking-widest text-gray-400 mb-2">TOOLBOX</p>
        <h2 className="font-display text-3xl font-bold mb-10">Skills & tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-[#ddd9cd] rounded-xl p-5">
            <p className="text-xs tracking-widest text-gray-400 mb-3">LANGUAGES</p>
            <ul className="space-y-1.5 text-sm">
              <li>Python</li>
              <li>C++</li>
              <li>SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="border border-[#ddd9cd] rounded-xl p-5">
            <p className="text-xs tracking-widest text-gray-400 mb-3">ML & DL</p>
            <ul className="space-y-1.5 text-sm">
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>scikit-learn</li>
              <li>Hugging Face</li>
            </ul>
          </div>
          <div className="border border-[#ddd9cd] rounded-xl p-5">
            <p className="text-xs tracking-widest text-gray-400 mb-3">DATA & MLOPS</p>
            <ul className="space-y-1.5 text-sm">
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Docker</li>
              <li>Weights & Biases</li>
            </ul>
          </div>
          <div className="border border-[#ddd9cd] rounded-xl p-5">
            <p className="text-xs tracking-widest text-gray-400 mb-3">TOOLS</p>
            <ul className="space-y-1.5 text-sm">
              <li>Git</li>
              <li>Linux</li>
              <li>Jupyter</li>
              <li>FastAPI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 py-10">
        <p className="text-xs tracking-widest text-gray-400 mb-2">THE PATH SO FAR</p>
        <h2 className="font-display text-3xl font-bold mb-10">Timeline</h2>
        <div className="border-l border-[#ddd9cd] pl-6 space-y-8">
          <div>
            <p className="text-xs text-gray-400">2026</p>
            <p className="font-bold text-lg">Final year — B.Tech AIML</p>
            <p className="text-sm text-gray-500">
              Specializing in deep learning and applied NLP. Capstone on multimodal models.
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400">2025</p>
            <p className="font-bold text-lg">ML Research Intern</p>
            <p className="text-sm text-gray-500">
              Worked on computer-vision pipelines for real-time defect detection.
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400">2024</p>
            <p className="font-bold text-lg">Open-source contributor</p>
            <p className="text-sm text-gray-500">
              Contributed utilities to popular ML tooling and shipped a few side projects.
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400">2022</p>
            <p className="font-bold text-lg">Started the journey</p>
            <p className="text-sm text-gray-500">
              Wrote my first neural network and never looked back.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-16">
        <div className="border border-[#ddd9cd] rounded-2xl p-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <h3 className="font-display text-2xl font-bold">Want to work together?</h3>
          <Link
            to="/contact"
            className="bg-ink text-white px-6 py-3 rounded-full text-sm"
          >
            Contact me →
          </Link>
        </div>
      </section>
    </div>
  );
}

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});