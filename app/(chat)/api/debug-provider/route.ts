import { isTestEnvironment } from '@/lib/constants';

export async function GET() {
  return Response.json({
    NODE_ENV: process.env.NODE_ENV,
    isTestEnvironment,
    playwrightTestBaseUrl: process.env.PLAYWRIGHT_TEST_BASE_URL,
    playwright: process.env.PLAYWRIGHT,
    ciPlaywright: process.env.CI_PLAYWRIGHT,
    hasGroqApiKey: !!process.env.GROQ_API_KEY,
    groqApiKeyLength: process.env.GROQ_API_KEY?.length || 0,
  });
}
