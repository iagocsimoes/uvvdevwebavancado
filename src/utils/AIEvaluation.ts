import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function VerifyComment(comment: string) {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Voce é uma IA para avaliar se um comentário é ofensivo ou não, retornando apenas com ofensivo ou não ofensivo",
      },
      {
        role: "user",
        content: comment,
      },
    ],
    model: "llama-3.1-70b-versatile",
  });
  return response.choices[0]?.message?.content;
}
