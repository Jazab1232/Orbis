"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardScreenProps {
    children: React.ReactNode;
}

export default function DashboardScreen({ children }: DashboardScreenProps) {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-background">
            <Topbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="p-6 md:p-8 flex-1 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
