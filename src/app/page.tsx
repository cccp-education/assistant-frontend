// 'use client';

import {AiChat} from '@nlux/react';
import {
    llama2InputPreProcessor,
    llama2OutputPreProcessor,
    useChatAdapter,
} from '@nlux/hf-react';

export default function Home() {
    return (
        <AiChat
            adapter={useChatAdapter({
                endpoint: process.env.NEXT_PUBLIC_HUGGINGFACE_API_URL,
                authToken: process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN,
                model: process.env.NEXT_PUBLIC_HUGGINGFACE_MODEL,
                preProcessors: {
                    input: llama2InputPreProcessor,
                    output: llama2OutputPreProcessor,
                },
            })}
            composerOptions={{
                placeholder: 'How can I help you today?'
            }}
        />
    );
};
