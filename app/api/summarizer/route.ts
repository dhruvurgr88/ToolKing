import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { prompt, length } = await req.json();

    if (!prompt) return new Response("No text provided", { status: 400 });

    const lengthInstructions = {
      short: "Summarize into 3 concise bullet points.",
      medium: "Summarize into a professional paragraph.",
      long: "Provide a detailed summary with key highlights and a conclusion.",
    };

    const result = streamText({
      model: groq("llama-3.3-70b-versatile"),
      system:
        "You are a professional editor. Respond ONLY with the summary text. No conversational filler.",
      prompt: `${lengthInstructions[length as keyof typeof lengthInstructions] || lengthInstructions.medium}\n\nContent: ${prompt}`,
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("Groq API Error:", error.message);
    return new Response(error.message, { status: 500 });
  }
}
