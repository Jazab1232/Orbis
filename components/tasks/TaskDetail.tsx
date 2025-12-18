"use client"

import { Task } from "./TasksTable"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Plus,
    FileText,
    Image as ImageIcon,
    Upload,
    Play,
    Clock
} from "lucide-react"
import { Textarea } from "../ui/textarea"
import ButtonPrimary from "../common/ButtonPrimary"
import ButtonSecondary from "../common/ButtonSecondary"
// import Calendar22 from "../calendar-22"

export interface TaskSubtask {
    id: string
    title: string
    completed: boolean
}

export interface TaskAttachment {
    id: string
    name: string
    size: string
    type: "pdf" | "image" | "other"
}

export interface TaskDetailData extends Task {
    description?: string
    subtasks?: TaskSubtask[]
    attachments?: TaskAttachment[]
    assigneeAvatars?: string[]
    timeLogged?: string
    timeEstimated?: string
}

interface TaskDetailProps {
    task: TaskDetailData
    onSave?: () => void
    onCancel?: () => void
    onCollapse?: () => void
}

const STATUS_OPTIONS = ["To Do", "In Progress", "Blocked", "Ready for Review", "Done"]
const PRIORITY_OPTIONS = ["Low", "Medium", "High", "Critical"]

export default function TaskDetail({
    task,
    onSave,
    onCancel,
    onCollapse
}: TaskDetailProps) {
    const completedSubtasks = task.subtasks?.filter(s => s.completed).length || 0
    const totalSubtasks = task.subtasks?.length || 0

    return (
        <div className="w-full bg-card rounded-lg border p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Task Title
                        </Label>
                        <Input
                            defaultValue={task.title}
                            className="text-base bg-input border-muted h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Description
                        </Label>
                        <Textarea
                            defaultValue={task.description || ""}
                            placeholder="Task Description..."
                            className="min-h-[120px] resize-none bg-input border-muted h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Subtasks ({completedSubtasks}/{totalSubtasks} completed)
                        </Label>
                        <div className="space-y-2">
                            {task.subtasks?.map((subtask) => (
                                <div
                                    key={subtask.id}
                                    className="flex items-center gap-3 p-2 rounded hover:bg-muted-light"
                                >
                                    <Checkbox
                                        defaultChecked={subtask.completed}
                                        className="data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                                    />
                                    <span className={subtask.completed ? "line-through text-text-medium" : ""}>
                                        {subtask.title}
                                    </span>
                                </div>
                            ))}
                            <button className="flex items-center gap-2 text-sm text-text-medium hover:text-text-main mt-2">
                                <Plus className="w-4 h-4" />
                                Add Subtask
                            </button>
                        </div>
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Attachments ({task.attachments?.length || 0})
                        </Label>
                        <div className="space-y-2">
                            {task.attachments?.map((attachment) => (
                                <div
                                    key={attachment.id}
                                    className="flex items-center gap-3 p-3 rounded border bg-muted-light hover:bg-muted"
                                >
                                    {attachment.type === "pdf" ? (
                                        <FileText className="w-5 h-5 text-red-500" />
                                    ) : attachment.type === "image" ? (
                                        <ImageIcon className="w-5 h-5 text-primary" />
                                    ) : (
                                        <FileText className="w-5 h-5 text-text-medium" />
                                    )}
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{attachment.name}</p>
                                        <p className="text-xs text-text-medium">{attachment.size}</p>
                                    </div>
                                </div>
                            ))}
                            <button className="flex items-center gap-2 text-sm text-text-medium hover:text-text-main mt-2">
                                <Upload className="w-4 h-4" />
                                Upload Files
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Status
                        </Label>
                        <Select defaultValue={task.status}>
                            <SelectTrigger className="w-full bg-input h-[40px] border-muted focus:ring-0 focus:ring-offset-0">
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                {STATUS_OPTIONS.map((status) => (
                                    <SelectItem key={status} value={status}>
                                        {status}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Priority
                        </Label>
                        <Select defaultValue={task.priority}>
                            <SelectTrigger className="w-full bg-input h-[40px] border-muted focus:ring-0 focus:ring-offset-0">
                                <SelectValue placeholder="Select Priority" />
                            </SelectTrigger>
                            <SelectContent>
                                {PRIORITY_OPTIONS.map((priority) => (
                                    <SelectItem key={priority} value={priority}>
                                        {priority}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Assignees
                        </Label>
                        <div className="flex -space-x-2">
                            {task.assigneeAvatars?.map((avatar, index) => (
                                <Avatar key={index} className="border-2 border-background">
                                    <AvatarImage src={avatar} />
                                    <AvatarFallback>U{index + 1}</AvatarFallback>
                                </Avatar>
                            )) || (
                                    <>
                                        <Avatar className="border-2 border-background">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="border-2 border-background">
                                            <AvatarImage src="https://github.com/maxleiter.png" />
                                            <AvatarFallback>ML</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="border-2 border-background">
                                            <AvatarImage src="https://github.com/evilrabbit.png" />
                                            <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                                    </>
                                )}
                        </div>
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Due Date
                        </Label>
                        {/* <Input
                            type="date"
                            defaultValue="2025-01-20"
                            className="text-sm bg-input focus-visible:ring-0 focus-visible:ring-offset-0"
                        /> */}
                        {/* <Calendar22 /> */}
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-text-medium mb-2 block">
                            Time Tracking
                        </Label>
                        <p className="text-sm text-text-medium mb-3">
                            {task.timeLogged || "12h"} logged / {task.timeEstimated || "16h"} estimated
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <ButtonPrimary
                                label={'Start Timer'}
                                width={"w-full"}
                                onClick={() => { }}
                                height={"h-[70px]"}
                                icon={<Play className="w-4 h-4 mr-2" />}
                                backgroundColor="bg-[#059669]"
                            />
                            <ButtonPrimary
                                label={'Log Time'}
                                width={"w-full"}
                                onClick={() => { }}
                                height={"h-[70px]"}
                                icon={<Clock className="w-4 h-4 mr-2" />}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t">
                <ButtonSecondary

                    onClick={onCancel}
                    label={'Cancel'}
                    width={"w-[120px]"}
                />
                <ButtonSecondary

                    onClick={onCollapse}
                    label={'Collapse'}
                    width={"w-[120px]"}
                />
                <ButtonPrimary
                    onClick={onSave}
                    label={'Save Changes'}
                    width={"w-[170px]"}
                />

            </div>
        </div >
    )
}