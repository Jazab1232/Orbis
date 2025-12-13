"use client";

interface CardProps {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-default hover:shadow-hover transition-shadow duration-200">
            {children}
        </div>
    );
}
