"use client";

interface DataTableProps {
    columns: string[];
    data: (string | number | React.ReactNode)[][];
}

export default function DataTable({ columns, data }: DataTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="border-b">
                        {columns.map((c) => (
                            <th key={c} className="text-left py-2 font-medium">{c}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="border-b last:border-none">
                            {row.map((cell, j) => (
                                <td key={j} className="py-2">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
