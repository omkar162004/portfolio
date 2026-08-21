import { createRoute, useParams, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "../firebase";
import { rootRoute } from "./root";
import { projects } from "../content/loadProjects";

export const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$slug",
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = useParams({ from: "/projects/$slug" });
  const project = projects.find((p) => p.slug === slug);

  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    async function loadLikes() {
      const likeDoc = await getDoc(doc(db, "projectLikes", slug));
      setLikes(likeDoc.exists() ? likeDoc.data().count : 0);

      const liked = localStorage.getItem(`liked-project-${slug}`) === "true";
      setHasLiked(liked);
    }
    loadLikes();
  }, [slug]);

  async function toggleLike() {
    const newHasLiked = !hasLiked;
    setHasLiked(newHasLiked);
    setLikes(newHasLiked ? likes + 1 : likes - 1);

    localStorage.setItem(`liked-project-${slug}`, String(newHasLiked));

    await setDoc(
      doc(db, "projectLikes", slug),
      { count: increment(newHasLiked ? 1 : -1) },
      { merge: true }
    );
  }

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
      <h1 className="font-display text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-6">{project.description}</p>

      <div className="flex gap-2 mb-10">
        {project.tags.map((tag: string) => (
          <span key={tag} className="bg-gray-100 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-cream-dark h-72 rounded-2xl flex items-center justify-center text-gray-300 mb-10">
        Image
      </div>

      <project.Component />

      {/* Likes */}
      <div className="flex items-center gap-6 border-t border-b border-[#ddd9cd] py-4 mt-10 mb-10 text-sm text-gray-500">
        <button
          onClick={toggleLike}
          className={hasLiked ? "flex items-center gap-1.5 text-clay" : "flex items-center gap-1.5"}
        >
          {hasLiked ? "♥" : "♡"} {likes} Likes
        </button>
      </div>

      <Link to="/projects" className="text-sm underline">
        ← Back to all projects
      </Link>
    </div>
  );
}