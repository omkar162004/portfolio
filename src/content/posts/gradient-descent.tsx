export const meta = {
  slug: "gradient-descent",
  category: "Fundamentals",
  title: "The Intuition Behind Gradient Descent",
  excerpt: "Forget the calculus for a second. Here's how I finally understood why models learn by walking downhill.",
  date: "May 12, 2026",
  readTime: "6 min read",
};

export default function GradientDescentPost() {
  return (
    <>
      <p className="text-gray-600 leading-relaxed">
        When I first met gradient descent it felt like magic dressed up as
        math. It isn't. It's just a very patient way of asking: which
        direction makes my error smaller?
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Imagine standing on a foggy hillside, blindfolded, trying to reach
        the lowest point. You can only feel the slope under your feet. The
        sensible move is to step downhill — and repeat. That's gradient
        descent.
      </p>
    </>
  );
}