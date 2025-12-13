"use client";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="space-y-1">
            <h1 className="text-2xl font-bold">{title}</h1>
            {subtitle && <p className="text-sm text-[#6B7280] font-inter">{subtitle}</p>}
        </div>
    );
}
