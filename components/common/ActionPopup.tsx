"use client"

import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import {
    ChevronDown,
    Edit,
    Play,
    Clock,
    Copy,
    Trash2,
    MoreVertical,
} from "lucide-react"

export interface ActionItem {
    id: string
    label: string
    icon?: React.ReactNode
    onClick: () => void
    variant?: "default" | "destructive"
    separator?: boolean
}

export interface ActionPopupProps {
    actions?: ActionItem[]
    trigger?: React.ReactNode

    taskId?: string
    onViewDetails?: (taskId: string) => void
    onEdit?: (taskId: string) => void
    onStartTimer?: (taskId: string) => void
    onLogTime?: (taskId: string) => void
    onDuplicate?: (taskId: string) => void
    onDelete?: (taskId: string) => void

    align?: "start" | "center" | "end"
    side?: "top" | "right" | "bottom" | "left"
    className?: string
    contentClassName?: string
}

function ActionPopup({
    actions: customActions,
    trigger,
    taskId,
    onViewDetails,
    onEdit,
    onStartTimer,
    onLogTime,
    onDuplicate,
    onDelete,
    align = "end",
    side = "bottom",
    className,
    contentClassName,
}: ActionPopupProps) {
    const taskActions: ActionItem[] = React.useMemo(() => {
        if (!taskId) return []

        const actions: ActionItem[] = []

        if (onViewDetails) {
            actions.push({
                id: "view",
                label: "Expand Details",
                icon: <ChevronDown className="w-4 h-4" />,
                onClick: () => onViewDetails(taskId),
            })
        }

        if (onEdit) {
            actions.push({
                id: "edit",
                label: "Edit Task",
                icon: <Edit className="w-4 h-4" />,
                onClick: () => onEdit(taskId),
            })
        }

        if (onStartTimer) {
            actions.push({
                id: "start",
                label: "Start Timer",
                icon: <Play className="w-4 h-4" />,
                onClick: () => onStartTimer(taskId),
            })
        }

        if (onLogTime) {
            actions.push({
                id: "log",
                label: "Log Time Manually",
                icon: <Clock className="w-4 h-4" />,
                onClick: () => onLogTime(taskId),
            })
        }

        if (onDuplicate) {
            actions.push({
                id: "duplicate",
                label: "Duplicate Task",
                icon: <Copy className="w-4 h-4" />,
                onClick: () => onDuplicate(taskId),
                separator: true,
            })
        }

        if (onDelete) {
            actions.push({
                id: "delete",
                label: "Delete Task",
                icon: <Trash2 className="w-4 h-4" />,
                onClick: () => onDelete(taskId),
                variant: "destructive",
            })
        }

        return actions
    }, [taskId, onViewDetails, onEdit, onStartTimer, onLogTime, onDuplicate, onDelete])

    const actions = customActions || taskActions

    const defaultTrigger = (
        <button
            className="p-1.5 hover:bg-muted outline-none cursor-pointer rounded-md transition-colors"
            aria-label="Task actions"
        >
            <MoreVertical className="w-4 h-4 text-muted-dark" />
        </button>
    )

    const finalTrigger = trigger || defaultTrigger

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className={cn(className)}>
                {finalTrigger}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align={align}
                side={side}
                className={cn("w-[200px] bg-card", contentClassName)}
            >
                {actions.map((action, index) => (
                    <React.Fragment key={action.id}>
                        <DropdownMenuItem
                            onClick={action.onClick}
                            variant={action.variant || "default"}
                            className="cursor-pointer hover:bg-muted focus:bg-muted-light focus:text-inherit"
                        >
                            {action.icon && (
                                <span className="mr-2 flex items-center justify-center">
                                    {action.icon}
                                </span>
                            )}
                            <span>{action.label}</span>
                        </DropdownMenuItem>
                        {action.separator && index < actions.length - 1 && (
                            <DropdownMenuSeparator />
                        )}
                    </React.Fragment>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ActionPopup
