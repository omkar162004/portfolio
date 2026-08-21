import { createRoute, useParams, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, where, doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "../firebase";
import { rootRoute } from "./root";
import { posts } from "../content/loadPosts";

export const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = posts.find((p) => p.slug === slug);

  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const q = query(collection(db, "blogComments"), where("postSlug", "==", slug));
      const snapshot = await getDocs(q);
      const loadedComments = snapshot.docs.map((doc) => doc.data() as { name: string; text: string });
      setComments(loadedComments);

      const likeDoc = await getDoc(doc(db, "postLikes", slug));
      setLikes(likeDoc.exists() ? likeDoc.data().count : 0);

      const liked = localStorage.getItem(`liked-post-${slug}`) === "true";
      setHasLiked(liked);

      setLoading(false);
    }
    loadData();
  }, [slug]);

  async function toggleLike() {
    const newHasLiked = !hasLiked;
    setHasLiked(newHasLiked);
    setLikes(newHasLiked ? likes + 1 : likes - 1);

    localStorage.setItem(`liked-post-${slug}`, String(newHasLiked));

    await setDoc(
      doc(db, "postLikes", slug),
      { count: increment(newHasLiked ? 1 : -1) },
      { merge: true }
    );
  }

  async function handleCommentSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    if (isSubmitting) return;

    setIsSubmitting(true);

    const newComment = { name: commentName, text: commentText, postSlug: slug };

    setComments([...comments, newComment]);
    setCommentName("");
    setCommentText("");
    setIsSubmitting(false);

    await addDoc(collection(db, "blogComments"), newComment);
  }

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
      <h1 className="font-display text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-xs text-gray-400 mb-8">{post.date} · {post.readTime}</p>

      <div className="bg-cream-dark h-72 rounded-2xl flex items-center justify-center text-gray-300 mb-8">
        Image
      </div>

      <post.Component />

      {/* Likes */}
      <div className="flex items-center gap-6 border-t border-b border-[#ddd9cd] py-4 my-10 text-sm text-gray-500">
        <button
          onClick={toggleLike}
          className={hasLiked ? "flex items-center gap-1.5 text-clay" : "flex items-center gap-1.5"}
        >
          {hasLiked ? "♥" : "♡"} {likes} Likes
        </button>
        <span>💬 {comments.length} Comments</span>
      </div>

      {/* Comments */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4">Leave a comment</h3>
        <form onSubmit={handleCommentSubmit} className="space-y-3 mb-8">
          <input
            value={commentName}
            onChange={(e) => setCommentName(e.target.value)}
            placeholder="Your name"
            className="w-full border border-[#ddd9cd] rounded-lg px-4 py-2.5 text-sm"
          />
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts..."
            rows={3}
            className="w-full border border-[#ddd9cd] rounded-lg px-4 py-2.5 text-sm"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-ink text-white px-5 py-2.5 rounded-lg text-sm disabled:opacity-50"
          >
            {isSubmitting ? "Posting..." : "Post comment"}
          </button>
        </form>

        {loading ? (
          <p className="text-sm text-gray-400">Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-gray-400">Be the first to comment.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment, i) => (
              <div key={i} className="border border-[#ddd9cd] rounded-lg p-4">
                <p className="font-medium text-sm">{comment.name}</p>
                <p className="text-sm text-gray-500 mt-1">{comment.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}