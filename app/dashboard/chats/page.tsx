"use client";

import PageHeader from "@/components/common/PageHeader";
import Card from "@/components/common/Card";
import DataTable from "@/components/common/DataTable";

export default function ChatsPage() {
    return (
        <div className="space-y-6">
            <PageHeader title="Chats" subtitle="Recent conversations." />

            <Card>
                <DataTable
                    columns={["User/Group", "Last Message", "Time", "Status"]}
                    data={[
                        ["Project Alpha", "Update on the timeline?", "10:30 AM", "Active"],
                        ["Support", "Ticket #1234 resolved", "09:15 AM", "Closed"],
                    ]}
                />
            </Card>
        </div>
    );
}
