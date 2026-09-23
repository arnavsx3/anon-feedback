export interface Feedback {
  id: number;
  company: string;
  content: string;
  created_at: string;
}

const API_URL = "";

export async function createFeedback(
  company: string,
  content: string,
): Promise<Feedback> {
  const response = await fetch(`${API_URL}/api/feedback/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company,
      content,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit feedback");
  }

  return response.json();
}

export async function getFeedback(company: string): Promise<Feedback[]> {
  const response = await fetch(
    `${API_URL}/api/feedback/${encodeURIComponent(company)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch feedback");
  }

  return response.json();
}
