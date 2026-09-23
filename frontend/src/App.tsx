import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import { companies } from "./companies";

function App() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(
    null,
  );

  const [feedback, setFeedback] = useState<Record<number, string[]>>({
    1: [
      "Great engineering culture, but the interview process is intense.",
      "Would love to see better communication between teams.",
    ],
    2: [
      "Some products are fantastic, but the ecosystem can feel overwhelming.",
    ],
  });

  const selectedCompany = companies.find(
    (company) => company.id === selectedCompanyId,
  );

  const handleFeedback = (text: string) => {
    if (!selectedCompany) return;

    setFeedback((current) => ({
      ...current,
      [selectedCompany.id]: [text, ...(current[selectedCompany.id] ?? [])],
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onHome={() => setSelectedCompanyId(null)} />

      {selectedCompany ? (
        <CompanyPage
          company={selectedCompany}
          feedback={feedback[selectedCompany.id] ?? []}
          onBack={() => setSelectedCompanyId(null)}
          onSubmit={handleFeedback}
        />
      ) : (
        <HomePage onCompanySelect={setSelectedCompanyId} />
      )}

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-xs text-slate-600">
        © 2026 anonfeedback · Built for honest conversations.
      </footer>
    </div>
  );
}

export default App;
