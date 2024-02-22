import {OpenAIApi , Configuration} from 'openai-edge'

const config = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? " ",
})

const openai = new OpenAIApi(config);

export async function getEmbeddings(text: string) {
  try {
    const response = await openai.createEmbedding({
      model: "text-embedding-3-small",
      input: text.replace(/[\n-_']/g, ""),
    });
    const result = await response.json();
    return result.data[0].embedding;
  } catch (error) {
    console.log("error calling openai embeddings api", error);
    throw error;
  }
}