import React from "react";
import { Card } from "../ui/card";
interface StatsCardProps {
    count: number | string;
    label: string;
    icon?: React.ReactNode,
    iconBg: string;
}

function StatsCard({
    count,
    label,
    icon,
    iconBg,
}: StatsCardProps) {
    return (
        <Card className="p-4">
            <div className="grid grid-cols-[48px_1fr] grid-rows-[1fr_14px] gap-x-4 items-center">
                <span
                    className="row-span-2 w-[48px] h-[48px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: iconBg }}
                >
                    {icon}
                </span>

                <p className="text-[24px] font-bold text-text-primary leading-6">
                    {count}
                </p>

                <p className="text-[12px] text-text-medium leading-4">
                    {label}
                </p>
            </div>
        </Card>
    );
}

export default StatsCard;
