import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OPENAI_API_KEY } from '$env/static/private';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
    apiKey: OPENAI_API_KEY
});

// Set the runtime to edge for best performance
export const config = {
    runtime: 'edge'
};

export async function POST({ request }) {
    const { prompt } = await request.json();

    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.completions.create({
        model: 'text-davinci-003',
        stream: true,
        temperature: 0.6,
        max_tokens: 300,
        prompt: `Create a TL;DR for the following support thread. If there's a solution, be sure to include it. 
  Do not include the term "TL;DR" in your response.: ${prompt}`
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
}
