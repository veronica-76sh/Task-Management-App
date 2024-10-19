'use client';

import Search from "@/app/components/Search";
import useGetAllTasks from "@/app/hooks/useGetAllTasks";
import { task } from "@prisma/client";

import { useEffect, useState } from "react";

function Tasks() {
    const [search, setSearch] = useState("");
    const [ showTasks, setShowTasks] = useState([]);
    const [sort, setSort] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [filterValue, setFilterValue] = useState("");
    const { tasks, error, isLoading } = useGetAllTasks();
    console.log(sort);
    useEffect(() => {
        if (tasks) {
        setShowTasks(tasks);
        }
    }, [tasks]);

    useEffect(() => {
        if (tasks) {
        const filteredTasks = tasks.filter((task :task) => {
            if (filterType === "priority") {
                return (
                    task.priority.toLowerCase().includes(filterValue.toLowerCase())
                );
            }
            if (filterType === "status") {
                return (
                    task.status.toLowerCase().includes(filterValue.toLowerCase())
                );
            }
            if(filterType === "all") {
                setSort("");
                return (task.title.toLowerCase().includes(search.toLowerCase())
            );
            }
        });
        setShowTasks(filteredTasks);
        }
    }, [search, tasks , filterType , filterValue]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div className="w-full">
            <Search search={search} setSearch={setSearch} setSort={setSort} setFilterType={setFilterType} setFilterValue={setFilterValue}>
                <div className="w-full">
                    <ul className="w-full">
                        <li className="w-full" key="ids">
                            <span className="bg-purple-500/20 m-1 px-3 w-[200px]">
                                #
                            </span>
                            <span className="bg-purple-500/20 m-1 px-3 ">
                                Title
                            </span>
                            <span className="bg-purple-500/20 m-1 px-3 ">
                                Priority
                            </span>
                            <span className="bg-purple-500/20 m-1 px-3 ">
                                Due Date
                            </span>
                            <span className="bg-purple-500/20 m-1 px-3 ">
                                Status
                            </span>
                        </li>
                        {showTasks.map((task :task , index : number ) => (
                            <li key={task.task_id}>
                                <span className="bg-purple-500/20 m-1 px-3 ">
                                    {index + 1}
                                </span>
                                <span className="bg-purple-500/20 m-1 px-3 ">
                                    {task.title}
                                </span>
                                <span className="bg-purple-500/20 m-1 px-3 ">
                                    {task.priority}
                                </span>
                                <span className="bg-purple-500/20 m-1 px-3 ">
                                    {new Date(task.due_date as Date).toLocaleDateString()}
                                </span>
                                <span className="bg-purple-500/20 m-1 px-3 ">
                                    {task.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Search>
        </div>
    )
}

export default Tasks;