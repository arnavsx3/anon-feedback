import { useState } from "react";

interface FeedbackFormProps {
  companyName: string;
  onSubmit: (feedback: string) => void;
}

export default function FeedbackForm({
  companyName,
  onSubmit,
}: FeedbackFormProps) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!feedback.trim()) return;

    onSubmit(feedback.trim());
    setFeedback("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-2 text-xl font-semibold text-white">
        Leave anonymous feedback
      </h2>

      <p className="mb-5 text-sm text-slate-400">
        Tell us what you really think about {companyName}.
      </p>

      <textarea
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
        placeholder="Write your feedback..."
        rows={5}
        maxLength={1000}
        className="mb-3 w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
      />

      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-600">{feedback.length}/1000</span>

        <button
          type="submit"
          disabled={!feedback.trim()}
          className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-40">
          Post feedback
        </button>
      </div>
    </form>
  );
}
