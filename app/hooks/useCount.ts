import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

export default function useCount() {
    const { data, error , isLoading } = useSWR('/api/count', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return {
        data,
        error,
        isLoading,
    };
}

// The  useCount  hook uses  useSWR  to fetch the count from the API. It returns the count, loading state, and error state.