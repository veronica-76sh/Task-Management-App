'use client';

import { useState } from "react";
import OptionModel from "./OptionModel";

interface FilterProps {
    setFilterType: (filterType: string) => void;
    setFilterValue: (filterValue: string) => void;
}

function Fillter({
    setFilterType,
    setFilterValue
} : FilterProps) {

    const [showPriority, setShowPriority] = useState(false);
    const [showStatus, setShowStatus] = useState(false);

    const handleShowOption = (setOption: (value: boolean | ((prevValue: boolean) => boolean)) => void) => {
        setOption((prevValue: boolean) => !prevValue);
    };

    const handleSetType = (type: string) => {
        setFilterType(type);
    }

  return (
    <div className="flex gap-4">
        <div onClick={() => handleSetType("all")} className="relative px-4 py-1 bg-purple-400 text-white border-2 border-purple-800 rounded-2xl shadow-md shadow-purple-800/40 hover:opacity-90 hover:shadow-none">
            Show All
        </div>
        <div onClick={() => {handleShowOption(setShowStatus); handleSetType("status")}} className="relative px-4 py-1 bg-purple-400 text-white border-2 border-purple-800 rounded-2xl shadow-md shadow-purple-800/40 hover:opacity-90 hover:shadow-none">
            Status
            {showStatus && <OptionModel options={["Done", "In_Progress", "pending"]} setOption={setFilterValue}/>}
        </div>
        <div onClick={() => {handleShowOption(setShowPriority); handleSetType("priority")}}  className="relative px-4 py-1 bg-purple-400 text-white border-2 border-purple-800 rounded-2xl shadow-md shadow-purple-800/40 hover:opacity-90 hover:shadow-none">
            Priority
            {showPriority && <OptionModel options={["Urgent", "High", "Medium", "Low"]} setOption={setFilterValue}/>}
        </div>
    </div>

  )
}

export default Fillter