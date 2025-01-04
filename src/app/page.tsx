'use client';

import {AiChat} from '@nlux/react';
import {
    ChatAdapterOptions,
    llama2InputPreProcessor,
    llama2OutputPreProcessor,
    useChatAdapter,
} from '@nlux/hf-react';

export default function Home() {
    const adapterOptions: ChatAdapterOptions = {
        endpoint: process.env.NEXT_PUBLIC_HUGGINGFACE_API_URL,
        authToken: process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN,
        preProcessors: {
            input: llama2InputPreProcessor,
            output: llama2OutputPreProcessor,
        },
    };
    const hfAdapter = useChatAdapter(adapterOptions);
    return (
        <AiChat
            adapter={hfAdapter}
            composerOptions={{
                placeholder: 'How can I help you today?'
            }}
        />
    );
};
