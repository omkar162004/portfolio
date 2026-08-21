import { createRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { rootRoute } from "./root";
import { posts } from "../content/loadPosts";

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
      <h1 className="font-display text-5xl font-bold mb-4">Blog</h1>
      <p className="text-gray-500 max-w-xl mb-10">
        Notes, explainers and lessons learned while studying machine learning.
      </p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts, topics, tags..."
        className="w-full border border-[#ddd9cd] rounded-full px-5 py-3 text-sm mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              category === activeCategory
                ? "bg-ink text-white text-xs px-4 py-1.5 rounded-full"
                : "border border-[#ddd9cd] text-xs px-4 py-1.5 rounded-full"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="border border-[#ddd9cd] rounded-2xl p-6 block hover:bg-cream-dark"
          >
            <div className="bg-cream-dark h-44 rounded-xl mb-5 flex items-center justify-center text-gray-300">
              Image
            </div>
            <p className="text-xs text-gray-400 mb-2">{post.category}</p>
            <h3 className="font-display text-xl font-bold mb-2">{post.title}</h3>
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