import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response("No input provided", { status: 400 });
    }

    const result = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: `Summarize this in simple words:\n\n${prompt}`,
    });

    return Response.json({ output: result.text });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
