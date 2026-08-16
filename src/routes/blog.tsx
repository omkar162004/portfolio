import { createRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { rootRoute } from "./root";

const posts = [
  {
    slug: "gradient-descent",
    category: "Fundamentals",
    title: "The Intuition Behind Gradient Descent",
    excerpt: "Forget the calculus for a second. Here's how I finally understood why models learn by walking downhill.",
    date: "May 12, 2026",
    readTime: "6 min read",
  },
  {
    slug: "attention-explained",
    category: "NLP",
    title: "Attention, Explained Like I'm Five",
    excerpt: "Transformers power almost everything now. Here's the core idea — attention — without the scary notation.",
    date: "April 2, 2026",
    readTime: "8 min read",
  },
  {
    slug: "reproducible-ml-workflow",
    category: "MLOps",
    title: "My Reproducible ML Experiment Workflow",
    excerpt: "The boring habits — config files, seeds, and logging — that saved me from countless 'it worked yesterday' moments.",
    date: "February 18, 2026",
    readTime: "5 min read",
  },
];

const allCategories = ["All", ...new Set(posts.map((p) => p.category))];

function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="px-8 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2">WRITING</p>
      <h1 className="text-5xl font-bold mb-4">Blog</h1>
      <p className="text-gray-500 max-w-xl mb-10">
        Notes, explainers and lessons learned while studying machine learning.
      </p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts, topics, tags..."
        className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              category === activeCategory
                ? "bg-black text-white text-xs px-4 py-1.5 rounded-full"
                : "border border-gray-200 text-xs px-4 py-1.5 rounded-full"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="border border-gray-200 rounded-2xl p-6 block hover:bg-gray-50"
          >
            <div className="bg-gray-50 h-44 rounded-xl mb-5 flex items-center justify-center text-gray-300">
              Image
            </div>
            <p className="text-xs text-gray-400 mb-2">{post.category}</p>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{post.excerpt}</p>
            <p className="text-xs text-gray-400">{post.date} · {post.readTime}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});