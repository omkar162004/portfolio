import { createRoute } from "@tanstack/react-router";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { rootRoute } from "./root";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    await addDoc(collection(db, "contactMessages"), {
      ...formData,
      submittedAt: new Date().toISOString(),
    });

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div className="px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <p className="text-xs tracking-widest text-gray-400 mb-2">CONTACT</p>
        <h1 className="font-display text-5xl font-bold mb-6">Let's talk.</h1>
        <p className="text-gray-500 max-w-md">
          Whether it's an internship, a research idea, or just a question
          about machine learning — fill out the form and I'll get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="border border-[#ddd9cd] rounded-2xl p-8">
        {submitted ? (
          <div className="text-center py-10">
            <p className="font-display text-2xl font-bold mb-2">Message sent!</p>
            <p className="text-sm text-gray-500">Thanks for reaching out — I'll reply soon.</p>
          </div>
        ) : (
          <>
            <label className="block text-sm mb-4">
              Name
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#ddd9cd] rounded-lg px-4 py-2.5 mt-1 text-sm"
                placeholder="Jane Doe"
              />
            </label>

            <label className="block text-sm mb-4">
              Email
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#ddd9cd] rounded-lg px-4 py-2.5 mt-1 text-sm"
                placeholder="jane@example.com"
              />
            </label>

            <label className="block text-sm mb-4">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-[#ddd9cd] rounded-lg px-4 py-2.5 mt-1 text-sm"
                placeholder="Tell me a little about what you have in mind..."
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-ink text-white py-3 rounded-lg text-sm disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});