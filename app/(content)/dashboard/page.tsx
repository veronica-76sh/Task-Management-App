'use client';

import Card from "@/app/components/Card";
import useCount from "@/app/hooks/useCount";

export default function Dashboard() {

  const { data, error, isLoading } = useCount();
  if (isLoading) return <div className="flex min-h-[80vh] justify-center items-center text-4xl">Loading...</div>;
  if (error) return <div className="flex min-h-[80vh] justify-center items-center text-4xl">Error</div>;
  return (
    <div className="flex flex-col px-8 py-10 gap-10">
      <div className="">
        <h2 className="text-purple-600 text-4xl font-semibold ">Tasks <span className="text-black">Dashboard</span></h2>
        <h3 className="text-purple-600 text-2xl font-semibold ml-2 mt-2">Welcome back</h3>
      </div>
      <div className="flex flex-row  justify-evenly flex-wrap gap-10 ">
        <div className="bg-purple-600 shadow-xl shadow-purple-400 w-72 h-52 lg:w-1/5 rounded-[4rem]">
          <Card title="Total Tasks" count={data.totalCount}/>
        </div>
        <div className="bg-rose-400 shadow-xl shadow-rose-300 w-72 h-52 lg:w-1/5 rounded-[4rem]">
          <Card title="In Progess" count={data.inProgressCount}/>
        </div>
        <div className="bg-yellow-400 shadow-xl shadow-yellow-300 w-72 h-52 lg:w-1/5 rounded-[4rem]">
          <Card title="Pending" count={data.pendingCount}/>
        </div>
        <div className="bg-blue-500 shadow-xl shadow-blue-400 w-72 h-52 lg:w-1/5 rounded-[4rem]">
          <Card title="Important" count={data.importantCount}/>
        </div>
      </div>
    </div>
  );
}