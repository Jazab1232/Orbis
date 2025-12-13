"use client";

import PageHeader from "@/components/common/PageHeader";
import Card from "@/components/common/Card";
import DataTable from "@/components/common/DataTable";

export default function MeetingsPage() {
    return (
        <div className="space-y-6">
            <PageHeader title="Meetings" subtitle="Upcoming and past meetings." />

            <Card>
                <DataTable
                    columns={["Title", "Date", "Time", "Organizer"]}
                    data={[
                        ["Daily Standup", "2025-01-12", "10:00 AM", "Jazab"],
                        ["Weekly Sync", "2025-01-15", "02:00 PM", "Irfan"],
                    ]}
                />
            </Card>
        </div>
    );
}
