import { createRoute, Link } from "@tanstack/react-router";
import { rootRoute } from "./root";

function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="px-8 py-20 grid grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            AI / ML ENGINEERING STUDENT
          </p>
          <h1 className="text-5xl font-bold leading-tight">
            Building intelligent systems, one experiment at a time.
          </h1>
          <p className="text-gray-500 mt-6 max-w-md">
            I'm an AI & Machine Learning engineering student fascinated by how
            data turns into decisions. I design, train and ship models — from
            computer vision to language — and write about what I learn along
            the way.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              to="/projects"
              className="bg-black text-white px-6 py-3 rounded-full text-sm"
            >
              View projects →
            </Link>
            <Link
              to="/contact"
              className="border border-gray-300 px-6 py-3 rounded-full text-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl h-80 flex items-center justify-center text-gray-300">
          Image / illustration goes here
        </div>
      </section>
      {/* Skills strip */}
      <section className="bg-gray-50 px-8 py-14 grid grid-cols-4 gap-8">
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-3">LANGUAGES</p>
          <ul className="space-y-1.5 text-sm">
            <li>Python</li>
            <li>C++</li>
            <li>SQL</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-3">ML & DL</p>
          <ul className="space-y-1.5 text-sm">
            <li>PyTorch</li>
            <li>TensorFlow</li>
            <li>scikit-learn</li>
            <li>Hugging Face</li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-3">DATA & MLOPS</p>
          <ul className="space-y-1.5 text-sm">
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Docker</li>
            <li>Weights & Biases</li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-3">TOOLS</p>
          <ul className="space-y-1.5 text-sm">
            <li>Git</li>
            <li>Linux</li>
            <li>Jupyter</li>
            <li>FastAPI</li>
          </ul>
        </div>
      </section>
            {/* Featured projects */}
      <section className="px-8 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-2">SELECTED WORK</p>
            <h2 className="text-3xl font-bold">Featured projects</h2>
          </div>
          <Link to="/projects" className="text-sm text-gray-500">
            All projects →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="bg-gray-50 h-56 rounded-xl mb-5 flex items-center justify-center text-gray-300">
              Image
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>COMPUTER VISION ON THE FACTORY FLOOR</span>
              <span>2025</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Defect Detection</h3>
            <p className="text-sm text-gray-500 mb-4">
              A lightweight CNN that flags surface defects from a live camera feed
              in under 30ms per frame, deployed on edge hardware.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">PyTorch</span>
              <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">OpenCV</span>
              <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">ONNX</span>
              <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">FastAPI</span>
            </div>
            <p className="text-sm font-medium">Read more →</p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="bg-gray-50 h-56 rounded-xl mb-5 flex items-center justify-center text-gray-300">
              Image
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>FINE-TUNED TRANSFORMERS FOR CONCISE NOTES</span>
              <span>2025</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Abstractive Summarizer</h3>
            <p className="text-sm text-gray-500 mb-4">
              A fine-tuned T5 model that turns long lecture transcripts into clean,
              readable summaries — with a tiny FastAPI service around it.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">Hugging Face</span>
              <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">T5</span>
              <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">FastAPI</span>
              <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">Docker</span>
            </div>
            <p className="text-sm font-medium">Read more →</p>
          </div>
        </div>
      </section>
      {/* Latest writing */}
      <section className="px-8 py-10">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-2">FROM THE BLOG</p>
            <h2 className="text-3xl font-bold">Latest writing</h2>
          </div>
          <Link to="/blog" className="text-sm text-gray-500">
            All posts →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="bg-gray-50 h-48 rounded-xl mb-5 flex items-center justify-center text-gray-300">
              Image
            </div>
            <p className="text-xs text-gray-400 mb-2">FUNDAMENTALS · OPTIMIZATION</p>
            <h3 className="text-xl font-bold mb-2">The Intuition Behind Gradient Descent</h3>
            <p className="text-sm text-gray-500 mb-4">
              Forget the calculus for a second. Here's how I finally understood why
              models learn by walking downhill.
            </p>
            <p className="text-xs text-gray-400">May 12, 2026 · 6 min read</p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="bg-gray-50 h-48 rounded-xl mb-5 flex items-center justify-center text-gray-300">
              Image
            </div>
            <p className="text-xs text-gray-400 mb-2">NLP · TRANSFORMERS</p>
            <h3 className="text-xl font-bold mb-2">Attention, Explained Like I'm Five</h3>
            <p className="text-sm text-gray-500 mb-4">
              Transformers power almost everything now. Here's the core idea —
              attention — without the scary notation.
            </p>
            <p className="text-xs text-gray-400">April 2, 2026 · 8 min read</p>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-8 py-16">
        <div className="bg-black text-white rounded-3xl px-10 py-16 text-center">
          <h2 className="text-3xl font-bold max-w-2xl mx-auto">
            Have a problem worth solving with machine learning?
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            I'm always open to internships, research collaborations and a good
            conversation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full text-sm mt-8"
          >
            Contact me →
          </Link>
        </div>
      </section>
    </div>
  );
}

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});