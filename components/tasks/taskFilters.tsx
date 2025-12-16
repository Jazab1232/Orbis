import {
    ArrowUp,
    CalendarCheck,
    Circle,
    CircleAlert,
    Eye,
    TriangleAlert,
    UserRound,
} from "lucide-react";
import { HalfBlackWhiteCircle } from "../common/icons";

export interface FilterItem {
    label: string;
    value: string;
    group: "quick" | "status" | "priority";
    count?: number;
    icon?: (active: boolean) => React.ReactNode;
}

export const TASK_FILTERS: FilterItem[] = [
    {
        label: "My tasks",
        value: "my_tasks",
        group: "quick",
        count: 20,
        icon: (active) => <UserRound className="w-4 h-4" color={active ? "#3B82F6" : "#374151"} />,
    },
    {
        label: "Overdue",
        value: "overdue",
        group: "quick",
        count: 5,
        icon: (active) => <TriangleAlert className="w-4 h-4" color={active ? "#3B82F6" : "#374151"} />,
    },
    {
        label: "Due Today",
        value: "due_today",
        group: "quick",
        count: 7,
        icon: (active) => <CalendarCheck className="w-4 h-4" color={active ? "#3B82F6" : "#374151"} />,
    },
    {
        label: "In Progress",
        value: "in_progress",
        group: "status",
        count: 10,
        icon: (active) => <HalfBlackWhiteCircle fill={active ? "#3B82F6" : "#374151"} />,
    },
    {
        label: "To Do",
        value: "to_do",
        group: "status",
        count: 12,
        icon: (active) => <Circle className="w-4 h-4" color={active ? "#3B82F6" : "#374151"} />,
    },
    {
        label: "Review",
        value: "review",
        group: "status",
        count: 4,
        icon: (active) => <Eye className="w-4 h-4" color={active ? "#3B82F6" : "#374151"} />,
    },
    {
        label: "High",
        value: "high",
        group: "priority",
        count: 6,
        icon: (active) => <ArrowUp className="w-4 h-4" color={active ? "#EA580C" : "#374151"} />,
    },
    {
        label: "Critical",
        value: "critical",
        group: "priority",
        count: 8,
        icon: (active) => (
            <CircleAlert className="w-4 h-4" color={active ? "#3B82F6" : "#374151"} />
        ),
    },
];
