"use client";

import { Inbox } from "lucide-react";

interface EmptyStateProps {
    title: string;
    message: string;
}

export default function EmptyState({ title, message }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <Inbox className="w-12 h-12 text-neutral-400 mb-3" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-neutral-500">{message}</p>
        </div>
    );
}
