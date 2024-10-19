'use client';

import Elements from "./Elements/Elements";

interface BodyProps {
    children: React.ReactNode;
}
const Body:React.FC<BodyProps> = ({
    children
}) => {
  return (
    <main className="flex flex-row min-h-[90.5vh] w-full z-10">
        <aside className="hidden md:block -mt-[4px] shadow-md shadow-neutral-400 min-h-full w-[8%] z-50 bg-purple-200/20">
            <Elements/>
        </aside>
        <div className="flex-grow bg-purple-300/20">
            {children}
        </div>
    </main>
  )
}

export default Body