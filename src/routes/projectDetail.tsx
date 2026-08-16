import { createRoute, useParams, Link } from "@tanstack/react-router";
import { rootRoute } from "./root";

const projects = [
  {
    slug: "real-time-defect-detection",
    title: "Real-time Defect Detection",
    category: "COMPUTER VISION",
    year: "2025",
    description: "A lightweight CNN that flags surface defects from a live camera feed in under 30ms per frame, deployed on edge hardware.",
    tags: ["PyTorch", "OpenCV", "ONNX", "FastAPI"],
  },
  {
    slug: "abstractive-summarizer",
    title: "Abstractive Summarizer",
    category: "NLP",
    year: "2025",
    description: "A fine-tuned T5 model that turns long lecture transcripts into clean, readable summaries — with a tiny FastAPI service around it.",
    tags: ["Hugging Face", "T5", "FastAPI", "Docker"],
  },
  {
    slug: "hybrid-movie-recommender",
    title: "Hybrid Movie Recommender",
    category: "RECOMMENDER",
    year: "2024",
    description: "A hybrid recommender combining matrix factorization with content embeddings to serve cold-start friendly suggestions.",
    tags: ["scikit-learn", "Pandas", "Streamlit"],
  },
];

export const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$slug",
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = useParams({ from: "/projects/$slug" });
  const project = projects.find((p) => p.slug === slug);

  // Guard clause: if no project matches this slug (bad URL, typo, etc.),
  // show a fallback instead of crashing trying to read properties of undefined.
  if (!project) {
    return (
      <div className="px-8 py-20 text-center">
        <p>Project not found.</p>
        <Link to="/projects" className="text-sm underline">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="px-8 py-20 max-w-3xl mx-auto">
      <p className="text-xs tracking-widest text-gray-400 mb-2">{project.category}</p>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-6">{project.description}</p>

      <div className="flex gap-2 mb-10">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-gray-100 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-gray-50 h-72 rounded-2xl flex items-center justify-center text-gray-300 mb-10">
        Image
      </div>

      <Link to="/projects" className="text-sm underline">
        ← Back to all projects
      </Link>
    </div>
  );
}