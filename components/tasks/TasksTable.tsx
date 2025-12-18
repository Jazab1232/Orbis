"use client";

import { useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Progress } from "../ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ActionPopup from "../common/ActionPopup";
import TaskDetail from "./TaskDetail";

// -------------------- TYPES --------------------
export type TaskStatus =
    | "In Progress"
    | "Blocked"
    | "To Do"
    | "Ready for Review"
    | "Done";

export type TaskPriority = "Low" | "Medium" | "High" | "Critical";

export interface Task {
    id: string;
    title: string;
    tag: string;
    status: TaskStatus;
    priority: TaskPriority;
    assignees: number;
    estHours: string;
    deadline: string;
    progressText: string;
    progressValue: number;
}


const STATUS_STYLES: Record<TaskStatus, string> = {
    "In Progress": "bg-blue-500 text-white",
    Blocked: "bg-red-500 text-white",
    "To Do": "bg-gray-200 text-gray-700",
    "Ready for Review": "bg-orange-500 text-white",
    Done: "bg-emerald-500 text-white",
};

const PRIORITY_STYLES: Record<TaskPriority, string> = {
    Low: "bg-emerald-500 text-white",
    Medium: "bg-yellow-400 text-black",
    High: "bg-orange-500 text-white",
    Critical: "bg-red-600 text-white",
};

export function TasksTable({ tasks }: { tasks: Task[] }) {
    const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

    const toggleTask = (id: string) => {
        setExpandedTaskId(prev => prev === id ? null : id);
    };
    return (
        <div className="w-full rounded-xl border bg-card overflow-hidden">
            <Table>
                <TableHeader className="rounded-t-xl text-text-medium font-bold">
                    <TableRow className="bg-card rounded-t-xl">
                        <TableHead className="w-[360px]">Task Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Assignees</TableHead>
                        <TableHead>Est. Hours</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead className="w-[220px]">Progress</TableHead>
                        <TableHead className="text-left">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tasks.map((task) => (
                        <Fragment key={task.id}>
                            <TableRow
                                onClick={() => toggleTask(task.id)}
                                className={`cursor-pointer transition-colors hover:bg-muted-light ${expandedTaskId === task.id ? "bg-card border-b-0" : ""}`}
                            >
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-medium text-text-main">
                                            {task.title}
                                        </span>
                                        <span className="w-fit rounded bg-muted px-2 py-[2px] text-xs text-text-dark">
                                            {task.tag}
                                        </span>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Badge className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[task.status]}`}>
                                        {task.status}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    <Badge className={`rounded-full px-3 py-1 text-xs font-medium ${PRIORITY_STYLES[task.priority]}`}>
                                        {task.priority}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    <div className="flex -space-x-2">
                                        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Avatar>
                                                <AvatarImage
                                                    src="https://github.com/maxleiter.png"
                                                    alt="@maxleiter"
                                                />
                                                <AvatarFallback>LR</AvatarFallback>
                                            </Avatar>
                                            <Avatar>
                                                <AvatarImage
                                                    src="https://github.com/evilrabbit.png"
                                                    alt="@evilrabbit"
                                                />
                                                <AvatarFallback>ER</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="text-text-medium">
                                    {task.estHours}
                                </TableCell>
                                <TableCell
                                    className={
                                        task.deadline.toLowerCase().includes("overdue")
                                            ? "text-red-500"
                                            : task.deadline.toLowerCase().includes("today")
                                                ? "text-orange-500"
                                                : "text-text-medium"
                                    }
                                >
                                    {task.deadline}
                                </TableCell>

                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-text-medium">
                                            {task.progressText}
                                        </span>
                                        <Progress value={task.progressValue} className="h-2" />
                                    </div>
                                </TableCell>

                                <TableCell className="text-right!" onClick={(e) => e.stopPropagation()}>
                                    <ActionPopup
                                        taskId={task.id}
                                        onViewDetails={(id) => toggleTask(id)}
                                        onEdit={(id) => console.log("Edit task:", id)}
                                        onStartTimer={(id) => console.log("Start timer:", id)}
                                        onLogTime={(id) => console.log("Log time:", id)}
                                        onDuplicate={(id) => console.log("Duplicate task:", id)}
                                        onDelete={(id) => console.log("Delete task:", id)}
                                    />
                                </TableCell>
                            </TableRow>
                            <AnimatePresence>
                                {expandedTaskId === task.id && (
                                    <TableRow className="bg-card/30 hover:bg-card/30 border-t-0 -mt-px">
                                        <TableCell colSpan={8} className="p-0 border-none">
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-2 border-b">
                                                    <TaskDetail
                                                        task={{
                                                            ...task,
                                                            timeEstimated: task.estHours
                                                        }}
                                                        onCollapse={() => setExpandedTaskId(null)}
                                                        onSave={() => console.log("Save", task.id)}
                                                        onCancel={() => setExpandedTaskId(null)}
                                                    />
                                                </div>
                                            </motion.div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </AnimatePresence>
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
