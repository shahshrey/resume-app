import { createGroq } from '@ai-sdk/groq';

export async function GET() {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    
    if (!apiKey) {
      return Response.json({ 
        success: false, 
        error: 'GROQ_API_KEY not found',
        hasApiKey: false
      });
    }

    const groq = createGroq({
      apiKey: apiKey.trim(),
    });

    const model = groq('openai/gpt-oss-120b');
    
    const testCall = await model.generateText({
      messages: [{
        role: 'user',
        content: 'Say "test" only'
      }],
      maxTokens: 10
    });

    return Response.json({ 
      success: true, 
      hasApiKey: true,
      apiKeyLength: apiKey.length,
      response: testCall.text
    });

  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      hasApiKey: !!process.env.GROQ_API_KEY
    });
  }
}
