import { useState } from "react";
import CompanyCard from "../components/CompanyCard";
import { companies } from "../companies";

interface HomePageProps {
  onCompanySelect: (companyId: number) => void;
}

export default function HomePage({ onCompanySelect }: HomePageProps) {
  const [search, setSearch] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main>
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <div className="mb-6 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            No names. No accounts. Just feedback.
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Say what you
            <span className="text-indigo-400"> really think.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Share honest, anonymous feedback about companies. No profiles, no
            public identity, no unnecessary noise.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <input
              type="text"
              placeholder="Search for a company..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">Explore companies</h2>

          <p className="mt-2 text-sm text-slate-500">
            {filteredCompanies.length} companies available
          </p>
        </div>

        {filteredCompanies.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                onClick={() => onCompanySelect(company.id)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-800 py-16 text-center">
            <p className="text-slate-400">No companies found.</p>
          </div>
        )}
      </section>
    </main>
  );
}
