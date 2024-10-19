import fetcher from "@/libs/fetcher";
import useSWR from "swr";

export default function useGetAllTasks() {;
    const { data, error , isLoading } = useSWR("/api/tasks", fetcher);
    return {
        tasks: data,
        error,
        isLoading
    }
}