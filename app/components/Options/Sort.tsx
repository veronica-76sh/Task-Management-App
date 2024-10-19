'use client';


import { useState } from "react";
import OptionModel from "./OptionModel";


interface SortProps {
    setSort: (sort: string) => void;
}

function Sort({
    setSort
} : SortProps) {

    const [showSort, setShowSort] = useState(false);

    const handleShowSort = () => {
        setShowSort((value) => !value);
    }

  return (
    <div>
        <div onClick={handleShowSort} className="relative px-4 py-1 bg-purple-400 text-white border-2 border-purple-800 rounded-2xl shadow-md shadow-purple-800/40 hover:opacity-90 hover:shadow-none">
            Sort
            {showSort && <OptionModel options={["Status", "Priority", "Due_Date" , "Created_At"]} setOption={setSort} />}
        </div>
    </div>
  )
}

export default Sort