import FeedbackForm from "../components/FeedbackForm";
import FeedbackItem from "../components/FeedbackItem";
import type { Company } from "../companies";

interface CompanyPageProps {
  company: Company;
  feedback: string[];
  onBack: () => void;
  onSubmit: (feedback: string) => void;
}

export default function CompanyPage({
  company,
  feedback,
  onBack,
  onSubmit,
}: CompanyPageProps) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <button
        onClick={onBack}
        className="mb-8 text-sm text-slate-500 transition hover:text-white">
        ← Back to companies
      </button>

      <div className="mb-10">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl font-bold text-indigo-400">
          {company.initials}
        </div>

        <span className="text-xs font-medium uppercase tracking-wider text-indigo-400">
          {company.category}
        </span>

        <h1 className="mt-2 text-4xl font-bold text-white">{company.name}</h1>

        <p className="mt-3 max-w-2xl text-slate-400">{company.description}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <FeedbackForm companyName={company.name} onSubmit={onSubmit} />

        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Recent feedback
            </h2>

            <span className="text-sm text-slate-500">
              {feedback.length} posts
            </span>
          </div>

          <div className="space-y-4">
            {feedback.length > 0 ? (
              feedback.map((item, index) => (
                <FeedbackItem key={index} text={item} />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-800 p-10 text-center">
                <p className="text-sm text-slate-500">
                  No feedback yet. Be the first.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
