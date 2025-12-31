"use client";

import { useState } from "react";
import { TASK_FILTERS } from "@/components/tasks/taskFilters";
import { ArrowDownNarrowWide, CalendarDays, Funnel, List, Loader, PlusIcon, TriangleAlert } from "lucide-react";
import FilterDropdown from "@/components/tasks/FilterDropdown";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import StatsCard from "@/components/common/StatsCard";
import { TasksTable } from "@/components/tasks/TasksTable";
import { TASKS_DATA } from "@/components/tasks/TASK_DATA";
import { Button } from "@/components/ui/button";
import SelectedFilterButton from "@/components/common/SelectedFilterButton";

const TASK_VIEW = [
    { label: 'List', value: 'list' },
    { label: 'Kanban', value: 'kanban' },
    { label: 'Calendar', value: 'calendar' }
]

export default function TasksPage() {
    const [open, setOpen] = useState(false);
    const [filters, setFilters] = useState<string[]>([]);
    const [view, setView] = useState<string>("list");
    console.log('filters', filters);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold">Tasks</h1>
                        <div className="flex gap-2">
                            {TASK_VIEW.map((vw, idx) => {
                                return <Button
                                    key={idx}
                                    onClick={() => setView(vw.value)}
                                    className={`${view === vw.value ? "bg-[#EFF6FF] text-primary hover:bg-[#EFF6FF]/80" : "text-text-medium bg-card "} hover:bg-muted/50 cursor-pointer h-[32px] px-3 rounded-[8px] flex items-center justify-center font-semibold text-[14px]`}>
                                    {vw.label}
                                </Button>
                            })}

                        </div>
                    </div>
                    <p className="text-sm text-text-medium">
                        Manage tasks across teams
                    </p>
                </div>

                <div className="flex gap-2 relative">
                    <ButtonPrimary icon={<PlusIcon className="w-4 h-4 mr-2" />} label="Add Task" />

                    <Button
                        className="w-[40px] h-[40px] bg-card hover:bg-card/80 border border-[#6B7280] flex items-center justify-center cursor-pointer rounded-[8px]"
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
                    <Button className="w-[40px] h-[40px] bg-card hover:bg-card/80 border border-[#6B7280]  flex items-center justify-center cursor-pointer rounded-[8px]">
                        <ArrowDownNarrowWide className="w-5 h-5 text-[#6B7280]" />
                    </Button>

                </div>
            </div>
            {/* Task Filters */}
            {filters.length > 0 && (
                <div className="flex flex-wrap justify-end items-center gap-2 bg-card p-2 rounded-[8px] shadow-sm">
                    {filters.map((filterValue) => {
                        const filterDef = TASK_FILTERS.find(f => f.value === filterValue);
                        if (!filterDef) return null;

                        return (
                            <SelectedFilterButton
                                key={filterValue}
                                filter={{ label: filterDef.label, group: filterDef.group }}
                                onClick={() => {
                                    setFilters(prev => prev.filter(f => f !== filterValue));
                                }}
                            />
                        );
                    })}
                    <div className="ml-2 pl-2 border-l">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setFilters([])}
                            className="text-text-medium hover:text-red-500 h-8 font-medium bg-transparent hover:bg-red-50"
                        >
                            Clear All
                        </Button>
                    </div>
                </div>
            )}
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
