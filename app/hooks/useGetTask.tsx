import fetcher from "@/libs/fetcher";
import useSWR from "swr";

export default function useGetTask(id: string) {
    const { data, error , isLoading } = useSWR(`/api/tasks/${id}`, fetcher);
    return {
        task: data,
        error,
        isLoading
    }
}