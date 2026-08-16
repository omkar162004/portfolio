import { createRoute, useParams, Link } from "@tanstack/react-router";
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

export const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="px-8 py-20 text-center">
        <p>Post not found.</p>
        <Link to="/blog" className="text-sm underline">Back to blog</Link>
      </div>
    );
  }

  return (
    <div className="px-8 py-20 max-w-2xl mx-auto">
      <Link to="/blog" className="text-sm text-gray-400">← All posts</Link>
      <p className="text-xs tracking-widest text-gray-400 mt-6 mb-2">{post.category}</p>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-xs text-gray-400 mb-8">{post.date} · {post.readTime}</p>

      <div className="bg-gray-50 h-72 rounded-2xl flex items-center justify-center text-gray-300 mb-8">
        Image
      </div>

      <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
      <p className="text-gray-600 leading-relaxed mt-4">
        The rest of your full post content goes here — replace this with your
        real writing.
      </p>
    </div>
  );
}