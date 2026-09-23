import type { Company } from "../companies";

interface CompanyCardProps {
  company: Company;
  onClick: () => void;
}

export default function CompanyCard({ company, onClick }: CompanyCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left transition hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-slate-900">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-lg font-bold text-indigo-400">
          {company.initials}
        </div>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
          {company.category}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">{company.name}</h3>

      <p className="mb-5 text-sm leading-6 text-slate-400">
        {company.description}
      </p>

      <span className="text-sm font-medium text-indigo-400 transition group-hover:text-indigo-300">
        View feedback →
      </span>
    </button>
  );
}
