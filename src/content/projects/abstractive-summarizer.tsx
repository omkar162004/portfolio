export const meta = {
  slug: "abstractive-summarizer",
  title: "Abstractive Summarizer",
  category: "NLP",
  year: "2025",
  description: "A fine-tuned T5 model that turns long lecture transcripts into clean, readable summaries — with a tiny FastAPI service around it.",
  tags: ["Hugging Face", "T5", "FastAPI", "Docker"],
};

export default function AbstractiveSummarizerProject() {
  return (
    <>
      <p className="text-gray-600 leading-relaxed">
        Long lecture transcripts are hard to review quickly. I fine-tuned a
        T5 model to generate concise, readable summaries automatically.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        The model runs behind a small FastAPI service, making it easy to
        call from any frontend or script.
      </p>
    </>
  );
}