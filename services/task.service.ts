import { http } from "@/lib/http/http";

export const TaskService = {
    getAll: () => http.get("/tasks"),
    create: (data: unknown) => http.post("/tasks", data),
};
