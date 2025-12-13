"use client";

import DashboardScreen from "@/components/common/DashboardScreen";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <DashboardScreen>{children}</DashboardScreen>;
}
