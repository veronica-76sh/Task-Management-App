import db from "@/libs/db";
import { NextResponse } from "next/server";
import { Priority, Status, Prisma } from "@prisma/client";

export const GET = async (request: Request) => {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status") as Status | null;
        const priority = searchParams.get("priority") as Priority | null;
        const sort = searchParams.get("sort");
        const search = searchParams.get("search");

        // Define the filter options with explicit types

        const filterOptions: Prisma.taskWhereInput = {};
        if (status) filterOptions.status = status;
        if (priority) filterOptions.priority = priority;
        if (search) {
            filterOptions.OR = [
                { title: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
            ];
        }

        // Define the sort options with explicit types
        const sortOptions: Prisma.taskOrderByWithRelationInput = {};
        if (sort) {
            if (sort === "priority") {
                sortOptions.priority = "desc";
            } else if (sort === "due_date") {
                sortOptions.due_date = "asc";
            } else if (sort === "created_at") {
                sortOptions.created_at = "asc";
            }
        }

        // Fetch tasks from the database with filtering and sorting
        const allTasks = await db.task.findMany({
            where: filterOptions,
            orderBy: sort ? sortOptions : undefined,
        });

        return new NextResponse(JSON.stringify(allTasks), { status: 200 });
    } catch (e) {
        return new NextResponse(`Error: ${e}`, { status: 500 });
    }
};

export const POST = async (req : Request ) => {
    try{
        const {title , description , status, due_date , priority } = await req.json();
        const task = await db.task.create({
            data: {
                title: title,
                description: description,
                status: status,
                due_date: due_date,
                priority: priority
            }
        })
        return new Response(JSON.stringify(task), {status: 200})

    } catch(e){
        return new Response(`error : ${e}`, {status: 500});
    }
}