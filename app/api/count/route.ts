
import db from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try{
        const totalCount = await db.task.count();
        const pendingCount = await db.task.count({
            where: {
                status: "PENDING"
            }
        });
        const inProgressCount = await db.task.count({
            where: {
                status: "IN_PROGRESS"
            }
        });
        const importantCount = await db.task.count({
            where: {
                priority: "URGENT"
            }
        });
        return new NextResponse(JSON.stringify({ totalCount, pendingCount, inProgressCount, importantCount }), { status: 200 });
    } catch(e){
        return new NextResponse(`Error: ${e}`, { status: 500 });
    }
}