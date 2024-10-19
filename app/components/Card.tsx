"use client";

interface CardProps {
    title: string;
    count : number;
}

function Card({
    title,
    count
}: CardProps) {
  return (
    <div className="w-full h-full">
        <div className="flex flex-col relative justify-center items-center h-full">
            <h3 className="text-3xl text-white font-bold -mt-4 ">{title}</h3>
            <h2 className="absolute bottom-0 text-4xl font-bold rounded-t-lg bg-neutral-600/20 text-white px-9 py-2">{count}</h2>
        </div>
    </div>
  )
}

export default Card;