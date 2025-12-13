"use client";

import Card from "@/components/common/Card";
import DataTable from "@/components/common/DataTable";
import FilterDropdown from "@/components/tasks/FilterDropdown";
import Button from "@/components/ui/button";
import { ArrowDownNarrowWide, Funnel, PlusIcon } from "lucide-react";

export default function TasksPage() {
    return (
        <div className="space-y-6 font-inter">
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold">Tasks</h1>
                    <p className="text-sm text-[#6B7280] font-inter">Manage all tasks across teams and projects.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button className="w-[150px] h-[40px] flex items-center justify-center bg-primary hover:bg-primary/80 cursor-pointer rounded-[8px] text-white"><PlusIcon className="w-4 h-4 mr-2" /><span>Add Task</span></Button>
                    <Button className="w-[40px] h-[40px] border border-[#6B7280] flex items-center justify-center cursor-pointer rounded-[8px]"><Funnel className="w-5 h-5 text-[#6B7280]" /></Button>
                    <Button className="w-[40px] h-[40px] border border-[#6B7280] flex items-center justify-center cursor-pointer rounded-[8px]"><ArrowDownNarrowWide className="w-5 h-5 text-[#6B7280]" /></Button>
                </div>
            </div>
            <Card>
                <DataTable
                    columns={["Name", "Status", "Owner", "Due Date"]}
                    data={[
                        ["Task A", "In Progress", "Jazab", "2025-01-10"],
                        ["Task B", "Completed", "Irfan", "2025-01-09"],
                    ]}
                />
            </Card>

            <FilterDropdown />
        </div>
    );
}
