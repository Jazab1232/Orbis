"use client";

import { Bell } from "lucide-react";
import SearchInput from "./SearchInput";
import { ThemeToggle } from "./ThemeToggle";

export default function Topbar() {
    return (
        <header className="w-full h-15 flex items-center justify-between border-b border-border px-6 bg-card text-foreground shadow-sm">
            <div className="bg-primary h-8 w-8 rounded-[8px]"></div>
            <SearchInput />
            <div className="flex items-center gap-4">
                <Bell className="w-6 h-6 text-muted-foreground dark:text-white" />
                <ThemeToggle />
                <div className="w-10 h-10 bg-primary rounded-full" />
            </div>
        </header>
    );
}
