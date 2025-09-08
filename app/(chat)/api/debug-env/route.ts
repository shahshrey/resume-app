export async function GET() {
  return Response.json({
    NODE_ENV: process.env.NODE_ENV,
    hasGroqApiKey: !!process.env.GROQ_API_KEY,
    groqApiKeyLength: process.env.GROQ_API_KEY?.length || 0,
    groqApiKeyPrefix: process.env.GROQ_API_KEY?.substring(0, 8) || 'undefined',
  });
}
