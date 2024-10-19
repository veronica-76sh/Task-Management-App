import db from "@/libs/db";

export const GET = async (req : Request , context : { params :{ id : string }}) => {

    const id = context.params.id;

    try{
        if (!id) {
            return new Response("ID is required", { status: 400 });
        }
        const task = await db.task.findUnique({
                where: {
                    task_id: id,
                }
            });
        if(!task){
            return new Response("ID not found", {status: 404})
        }
        return new Response(JSON.stringify(task), {status: 200})
    }
    catch(e){
        return new Response("error", {status: 500})
    }
 }




export const DELETE = async (req : Request , context : {
    params: { id: string }
} ) => {

    const id = context.params.id as string;

    try{
        if (!id) {
            return new Response("ID is required", { status: 400 });
        }

        try {
            const task = await db.task.delete({
                where: {
                    task_id: id
                }
            })
            return new Response(JSON.stringify(task), {status: 200})
        } catch (error) {
            return new Response("Task not found", {status: 404})
        }
    }
    catch(e){
        return new Response(`error : {e}`, {status: 500})
    }
}

export const PATCH = async (req : Request ,context :{
    params : { id : string }
} ) => {

    const id = context.params.id as string;

    try{
        if (!id) {
            return new Response("ID is required", { status: 400 });
        }

        const {title , description , status , priority } = await req.json();
        try {
            const task = await db.task.update({
                where: {
                    task_id: id
                },
                data: {
                    title: title,
                    description: description,
                    status: status,
                    priority: priority,
                }
            })
            return new Response(JSON.stringify(task), {status: 200})
        } catch (error) {
            return new Response("Task not found", {status: 404})
        }
    }
    catch(e){
        return new Response(`error : {e}`, {status: 500})
    }
}