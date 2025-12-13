"use client";
import { Calendar, ListTodo, MessageCircleMore, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    const links = [
        { href: "/dashboard/tasks", label: "Tasks", icon: <ListTodo className="w-5 h-5" /> },
        { href: "/dashboard/teams", label: "Teams", icon: <UsersRound className="w-5 h-5" /> },
        { href: "/dashboard/meetings", label: "Meetings", icon: <Calendar className="w-5 h-5" /> },
        { href: "/dashboard/chats", label: "Chats", icon: <MessageCircleMore className="w-5 h-5" /> },
    ];

    return (
        <aside className="w-[80px] bg-primary-dark text-white py-4 px-2 min-h-screen border-r border-primary-light/20 font-inter">
            <nav className="mt-6">
                {links.map((l) => (
                    <Link
                        key={l.href}
                        href={l.href}
                        className={`flex flex-col mt-3 gap-1 items-center px-3 py-1 rounded-lg transition-all duration-200 ${pathname === l.href
                            ? "bg-primary text-white shadow-sm font-medium"
                            : "hover:bg-white/10 text-blue-100"
                            }`}
                    >
                        <span>{l.icon}</span>
                        <span className="text-xs">{l.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
