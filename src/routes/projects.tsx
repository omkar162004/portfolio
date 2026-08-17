import { createRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { rootRoute } from "./root";

const projects = [
  {
    slug: "real-time-defect-detection",
    title: "Real-time Defect Detection",
    category: "COMPUTER VISION",
    year: "2025",
    description: "A lightweight CNN that flags surface defects from a live camera feed.",
    tags: ["PyTorch", "OpenCV", "ONNX", "FastAPI"],
  },
  {
    slug: "abstractive-summarizer",
    title: "Abstractive Summarizer",
    category: "NLP",
    year: "2025",
    description: "A fine-tuned T5 model that turns transcripts into clean summaries.",
    tags: ["Hugging Face", "T5", "FastAPI", "Docker"],
  },
  {
    slug: "hybrid-movie-recommender",
    title: "Hybrid Movie Recommender",
    category: "RECOMMENDER",
    year: "2024",
    description: "A hybrid recommender combining matrix factorization with content embeddings.",
    tags: ["scikit-learn", "Pandas", "Streamlit"],
  },
];

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesQuery = project.title.toLowerCase().includes(query.toLowerCase());
    const matchesTag = activeTag === "All" || project.tags.includes(activeTag);
    return matchesQuery && matchesTag;
  });

  return (
    <div className="px-8 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2">SELECTED WORK</p>
      <h1 className="font-display text-5xl font-bold mb-4">Projects</h1>
      <p className="text-gray-500 max-w-xl mb-10">
        A collection of things I've built while learning — from real-time
        computer vision to fine-tuned language models. Click any project to
        read the full write-up.
      </p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search projects, tech, topics..."
        className="w-full border border-[#ddd9cd] rounded-full px-5 py-3 text-sm mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={
              tag === activeTag
                ? "bg-ink text-white text-xs px-4 py-1.5 rounded-full"
                : "border border-[#ddd9cd] text-xs px-4 py-1.5 rounded-full"
            }
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="border border-[#ddd9cd] rounded-2xl p-6 block hover:bg-cream-dark"
          >
            <div className="bg-cream-dark h-44 rounded-xl mb-5 flex items-center justify-center text-gray-300">
              Image
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm font-medium">Read more →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});