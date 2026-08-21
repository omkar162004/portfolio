export default {
  slug: "hybrid-movie-recommender",
  title: "Hybrid Movie Recommender",
  category: "RECOMMENDER",
  year: "2024",
  description: "A hybrid recommender combining matrix factorization with content embeddings to serve cold-start friendly suggestions.",
  tags: ["scikit-learn", "Pandas", "Streamlit"],
  content: `Pure collaborative filtering struggles with new users and new movies — the "cold-start" problem. I combined it with content-based embeddings to handle this better.

The recommender blends matrix factorization scores with content similarity, then serves suggestions through a simple Streamlit interface.`,
};