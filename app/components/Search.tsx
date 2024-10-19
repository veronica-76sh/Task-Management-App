'use client';

import Fillter from "./Options/Fillter";
import Sort from "./Options/Sort";

interface SearchProps {
    search: string;
    setSearch: (search: string) => void;
    setSort: (sort: string) => void;
    setFilterType: (filterType: string) => void;
    setFilterValue: (filterValue: string) => void;
    children: React.ReactNode;
}

function Search({
    search,
    setSearch,
    setSort,
    setFilterType,
    setFilterValue,
    children
}: SearchProps) {
    return (
        <div className="flex flex-col px-8 py-10 gap-10 w-full">
            <div className="">
                <h2 className="text-purple-600 text-4xl font-semibold ">All Existing <span className="text-black">Tasks</span></h2>
                <h3 className="text-purple-600 text-2xl ml-2 mt-2">ADMIN PAGE</h3>
            </div>
            <div className="text-2xl font-semibold flex flex-row gap-4">
                <label htmlFor="search">Search Tasks : </label>
                <input
                type="text"
                id="search"
                name="search"
                placeholder="Search task here..."
                className="border-2 border-purple-950 rounded-lg px-4 py-2 text-lg h-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <Fillter setFilterType={setFilterType} setFilterValue={setFilterValue}/>
                <Sort setSort={setSort} />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
)}

export default Search;