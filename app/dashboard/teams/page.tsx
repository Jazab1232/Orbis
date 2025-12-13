"use client";

import PageHeader from "@/components/common/PageHeader";
import Card from "@/components/common/Card";
import DataTable from "@/components/common/DataTable";

export default function TeamsPage() {
    return (
        <div className="space-y-6">
            <PageHeader title="Teams" subtitle="Manage your teams and members." />

            <Card>
                <DataTable
                    columns={["Team Name", "Members", "Lead", "Status"]}
                    data={[
                        ["Engineering", "12", "Alice", "Active"],
                        ["Design", "5", "Bob", "Active"],
                    ]}
                />
            </Card>
        </div>
    );
}
