import { openai } from "@ai-sdk/openai";
import { streamText, UIMessage, convertToModelMessages } from "ai";
import { ollama } from 'ollama-ai-provider-v2';


export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: ollama("deepseek-r1:1.5b"),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
