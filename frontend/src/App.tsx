import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import { companies } from "./companies";
import { createFeedback, getFeedback } from "./api/feedback";

function App() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(
    null,
  );

  const [feedback, setFeedback] = useState<string[]>([]);

  const selectedCompany = companies.find(
    (company) => company.id === selectedCompanyId,
  );

  useEffect(() => {
    if (!selectedCompany) return;

    getFeedback(selectedCompany.name)
      .then((data) => {
        setFeedback(data.map((item) => item.content));
      })
      .catch((error) => {
        console.error(error);
        setFeedback([]);
      });
  }, [selectedCompany]);

  const handleFeedback = async (text: string) => {
    if (!selectedCompany) return;

    try {
      const created = await createFeedback(selectedCompany.name, text);

      setFeedback((current) => [created.content, ...current]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onHome={() => setSelectedCompanyId(null)} />

      {selectedCompany ? (
        <CompanyPage
          company={selectedCompany}
          feedback={feedback}
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
