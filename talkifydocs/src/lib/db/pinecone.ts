import { Pinecone, PineconeConfiguration } from '@pinecone-database/pinecone';

export const getPineconeClient = () => {
    return new Pinecone({
        environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT!,
        apiKey: process.env.NEXT_PUBLIC_PINECONE_KEY!,
    } as PineconeConfiguration);
};

