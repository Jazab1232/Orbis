"use client";

import { useEffect, useRef } from "react";
import { FilterItem } from "@/components/tasks/taskFilters";
import ButtonPrimary from "../common/ButtonPrimary";
import ButtonSecondary from "../common/ButtonSecondary";

interface Props {
    open: boolean;
    onClose: () => void;
    items: FilterItem[];
    value: string[];
    onChange: (value: string[]) => void;
}

export default function FilterDropdown({
    open,
    onClose,
    items,
    value,
    onChange,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        };
        if (open) document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open, onClose]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    if (!open) return null;

    function toggle(val: string) {
        onChange(
            value.includes(val)
                ? value.filter((v) => v !== val)
                : [...value, val]
        );
    }

    function renderSection(title: string, group: FilterItem["group"]) {
        return (
            <>
                <p className="text-xs font-bold text-gray-400 uppercase">{title}</p>

                {items
                    .filter((i) => i.group === group)
                    .map((item) => {
                        const active = value.includes(item.value);

                        return (
                            <div
                                key={item.value}
                                onClick={() => toggle(item.value)}
                                className={`flex justify-between font-inter items-center px-2 h-9 rounded-md cursor-pointer
                ${active ? "bg-blue-50 text-blue-600" : "text-[#374151]"}`}
                            >
                                <div className="flex gap-2 items-center">
                                    {item.icon?.(active)}
                                    <span className="text-sm">{item.label}</span>
                                </div>

                                {item.count !== undefined && (
                                    <span className="text-xs bg-gray-200 rounded-full px-2">
                                        {item.count}
                                    </span>
                                )}
                            </div>
                        );
                    })}

                <hr />
            </>
        );
    }

    return (
        <div
            ref={ref}
            className="absolute right-0 mt-12 w-[260px] max-h-[70vh]
      rounded-[8px] bg-card shadow-xl z-50 flex flex-col border border-border custom-scroll"
        >
            <div className="p-3 overflow-y-auto custom-scroll space-y-3">
                {renderSection("Quick Filters", "quick")}
                {renderSection("Status", "status")}
                {renderSection("Priority", "priority")}
            </div>

            <div className="flex gap-2 p-3 border-t">
                <ButtonSecondary
                    width="w-1/2"
                    label="Clear"
                    onClick={() => onChange([])}
                />
                <ButtonPrimary
                    onClick={onClose}
                    width="w-1/2"
                    label="Apply"
                />
            </div>
        </div>
    );
}
