'use client';

import { MdOutlineAddToPhotos, MdOutlinePending, MdOutlineSettings } from "react-icons/md";
import LinkElement from "./LinkElement"
import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { useState } from "react";

const Elements = () => {

  const [active, setActive] = useState("Dashboard");



  return (
    <div className="flex flex-col w-full justify-start">
      <LinkElement title="Dashboard" link="/dashboard" Icon={IoHome} active={active === "Dashboard"} setActive={setActive}/>
      <LinkElement title="Tasks" link="/tasks" Icon={BsPostcard} active={active === "Tasks"} setActive={setActive}/>
      <LinkElement title="Add Task" link="/tasks/new-task" Icon={MdOutlineAddToPhotos} active={active === "Add Task"} setActive={setActive}/>
      <LinkElement title="Pending" link="/tasks/pending" Icon={MdOutlinePending} active={active === "Pending"} setActive={setActive}/>
      <LinkElement title="Settings" link="/setting" Icon={MdOutlineSettings} active={active === "Settings"} setActive={setActive}/>
    </div>
  )
}

export default Elements