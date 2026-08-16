import { createRoute } from "@tanstack/react-router";
import { useState } from "react";
import { rootRoute } from "./root";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Message sent! (check the browser console)");
  }

  return (
    <div className="px-8 py-20 grid grid-cols-2 gap-12">
      <div>
        <p className="text-xs tracking-widest text-gray-400 mb-2">CONTACT</p>
        <h1 className="text-5xl font-bold mb-6">Let's talk.</h1>
        <p className="text-gray-500 max-w-md">
          Whether it's an internship, a research idea, or just a question
          about machine learning — fill out the form and I'll get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="border border-gray-200 rounded-2xl p-8">
        <label className="block text-sm mb-4">
          Name
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 text-sm"
            placeholder="Jane Doe"
          />
        </label>

        <label className="block text-sm mb-4">
          Email
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 text-sm"
            placeholder="jane@example.com"
          />
        </label>

        <label className="block text-sm mb-4">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 text-sm"
            placeholder="Tell me a little about what you have in mind..."
          />
        </label>

        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg text-sm">
          Send message
        </button>
      </form>
    </div>
  );
}

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});