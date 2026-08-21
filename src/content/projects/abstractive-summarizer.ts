export default {
  slug: "abstractive-summarizer",
  title: "Abstractive Summarizer",
  category: "NLP",
  year: "2025",
  description: "A fine-tuned T5 model that turns long lecture transcripts into clean, readable summaries — with a tiny FastAPI service around it.",
  tags: ["Hugging Face", "T5", "FastAPI", "Docker"],
  content: `Long lecture transcripts are hard to review quickly. I fine-tuned a T5 model to generate concise, readable summaries automatically.

The model runs behind a small FastAPI service, making it easy to call from any frontend or script.`,
};