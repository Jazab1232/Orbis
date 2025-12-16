"use client";

import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Progress } from "../ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
    return (
        <div className="rounded-xl border bg-card overflow-hidden">
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
                        <TableRow key={task.id} className="hover:bg-gray-50">
                            <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span className="font-medium text-main">
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

                            <TableCell className="text-gray-700">
                                {task.estHours}
                            </TableCell>
                            <TableCell
                                className={
                                    task.deadline.toLowerCase().includes("overdue")
                                        ? "text-red-500"
                                        : task.deadline.toLowerCase().includes("today")
                                            ? "text-orange-500"
                                            : "text-gray-700"
                                }
                            >
                                {task.deadline}
                            </TableCell>

                            <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-gray-500">
                                        {task.progressText}
                                    </span>
                                    <Progress value={task.progressValue} className="h-2" />
                                </div>
                            </TableCell>

                            <TableCell className="text-right!">
                                <MoreVertical className="h-4 w-4 text-gray-400 cursor-pointer" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
