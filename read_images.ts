import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function analyzeImage(url: string) {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { inlineData: { data: buffer.toString('base64'), mimeType: 'image/png' } },
            { text: 'What is the product name written on this image? Return ONLY the product name.' }
          ]
        }
      ]
    });
    console.log(`${url}: ${result.text}`);
  } catch (e) {
    console.error(`Error with ${url}:`, e);
  }
}

async function main() {
  await analyzeImage('https://twfik.com/desma1.png');
  await analyzeImage('https://twfik.com/desma2.png');
  await analyzeImage('https://twfik.com/anika1.png');
  await analyzeImage('https://twfik.com/anika2.png');
}

main();
