import { createWorker } from 'tesseract.js';

async function recognizeImage(url: string) {
  const worker = await createWorker('eng');
  const { data: { text } } = await worker.recognize(url);
  console.log(`--- ${url} ---`);
  console.log(text.trim());
  await worker.terminate();
}

async function main() {
  await recognizeImage('https://twfik.com/desma1.png');
  await recognizeImage('https://twfik.com/desma2.png');
  await recognizeImage('https://twfik.com/anika1.png');
  await recognizeImage('https://twfik.com/anika2.png');
}

main();
