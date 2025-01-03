import Image from "next/image";
import {AiChat} from '@nlux/react';
import {
    ChatAdapterOptions,
    useChatAdapter,
    llama2InputPreProcessor,
    llama2OutputPreProcessor,
} from '@nlux/hf-react';


const adapterOptions: ChatAdapterOptions<any> = {
    endpoint: process.env.NEXT_PUBLIC_HUGGINGFACE_API_URL,
    authToken: process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN,
    preProcessors: {
        input: llama2InputPreProcessor,
        output: llama2OutputPreProcessor,
    },
};

export default function Home() {
    const hfAdapter = useChatAdapter(adapterOptions);
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">model : {process.env.NEXT_PUBLIC_HUGGINGFACE_MODEL}</li>
                    <li className="mb-2">url : {process.env.NEXT_PUBLIC_HUGGINGFACE_API_URL}</li>
                    <li className="mb-2">token : {process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN}</li>
                </ol>
            </main>
            <AiChat
                adapter={hfAdapter}
                composerOptions={{
                    placeholder: 'How can I help you today?'
                }}
            />
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://talaria-formation.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://cheroliv.github.io/talaria"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://cccp.education/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to cccp.education →
                </a>
            </footer>
        </div>
    );
}
