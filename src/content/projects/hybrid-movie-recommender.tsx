export const meta = {
  slug: "hybrid-movie-recommender",
  title: "Hybrid Movie Recommender",
  category: "RECOMMENDER",
  year: "2024",
  description: "A hybrid recommender combining matrix factorization with content embeddings to serve cold-start friendly suggestions.",
  tags: ["scikit-learn", "Pandas", "Streamlit"],
};

export default function HybridMovieRecommenderProject() {
  return (
    <>
      <p className="text-gray-600 leading-relaxed">
        Pure collaborative filtering struggles with new users and new
        movies — the "cold-start" problem. I combined it with content-based
        embeddings to handle this better.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        The recommender blends matrix factorization scores with content
        similarity, then serves suggestions through a simple Streamlit
        interface.
      </p>
    </>
  );
}