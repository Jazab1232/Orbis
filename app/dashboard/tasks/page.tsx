"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import { TASK_FILTERS } from "@/components/tasks/taskFilters";
import { ArrowDownNarrowWide, CalendarDays, Funnel, List, Loader, PlusIcon, TriangleAlert } from "lucide-react";
import FilterDropdown from "@/components/tasks/FilterDropdown";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import StatsCard from "@/components/common/StatsCard";
import { TasksTable } from "@/components/tasks/TasksTable";
import { TASKS_DATA } from "@/components/tasks/TASK_DATA";

export default function TasksPage() {
    const [open, setOpen] = useState(false);
    const [filters, setFilters] = useState<string[]>([]);
    const [view, setView] = useState<string>("list");

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold">Tasks</h1>
                        <div className="flex gap-2">
                            <Button
                                onClick={() => setView("list")}
                                className={`${view === "list" ? "bg-[#EFF6FF] text-primary" : " text-text-medium"} h-[32px] px-3 rounded-[8px] flex items-center justify-center font-semibold text-[14px]`}>List</Button>
                            <Button
                                onClick={() => setView("kanban")}
                                className={`${view === "kanban" ? "bg-[#EFF6FF] text-primary" : " text-text-medium"} h-[32px] px-3 rounded-[8px] flex items-center justify-center font-semibold text-[14px]`}>Kanban</Button>
                            <Button
                                onClick={() => setView("calendar")}
                                className={`${view === "calendar" ? "bg-[#EFF6FF] text-primary" : "text-text-medium"} h-[32px] px-3 rounded-[8px] flex items-center justify-center font-semibold text-[14px]`}>Calendar</Button>
                        </div>
                    </div>
                    <p className="text-sm text-text-medium">
                        Manage tasks across teams
                    </p>
                </div>

                <div className="flex gap-2 relative">
                    <ButtonPrimary icon={<PlusIcon className="w-4 h-4 mr-2" />} label="Add Task" />

                    <Button
                        className="w-[40px] h-[40px] border border-[#6B7280] flex items-center justify-center cursor-pointer rounded-[8px]"
                        onClick={() => setOpen((v) => {
                            if (v) {
                                setOpen(false);
                                setFilters([]);
                            }
                            return !v;
                        })}
                    >
                        <Funnel className="w-4 h-4 text-[#6B7280]" />
                    </Button>

                    <FilterDropdown
                        open={open}
                        onClose={() => setOpen(false)}
                        items={TASK_FILTERS}
                        value={filters}
                        onChange={setFilters}
                    />
                    <Button className="w-[40px] h-[40px] border border-[#6B7280] flex items-center justify-center cursor-pointer rounded-[8px]">
                        <ArrowDownNarrowWide className="w-5 h-5 text-[#6B7280]" />
                    </Button>

                </div>
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-3">
                <StatsCard
                    count={124}
                    label="Total Tasks"
                    icon={<List className="w-6 h-6 text-[#3B82F6]" />}
                    iconBg="#DBEAFE"
                />
                <StatsCard
                    count={16}
                    label="Tasks Due Today"
                    icon={<CalendarDays className="w-6 h-6 text-[#F97316]" />}
                    iconBg="#FED7AA" />
                <StatsCard
                    count={20}
                    label="Overdue Tasks"
                    icon={<TriangleAlert className="w-6 h-6 text-[#EF4444]" />}
                    iconBg="#FEE2E2" />
                <StatsCard
                    count={35}
                    label="In Progress Tasks"
                    icon={<Loader className="w-6 h-6 text-[#10B981]" />}
                    iconBg="#D1FAE5" />
            </div>
            <TasksTable tasks={TASKS_DATA} />
        </div>
    );
}
