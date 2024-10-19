'use client';

import Link from "next/link";
import { IconType } from "react-icons";

interface LinkElementProps {
    title : string;
    link : string;
    active : boolean;
    setActive : (value : string) => void;
    Icon : IconType;
}

const LinkElement : React.FC<LinkElementProps>= ({
    title,
    link,
    active=false,
    setActive,
    Icon
}) => {

    const handleActive = () => {
        setActive(title);
    }


  return (
    <Link href={link}>
        <div className={`flex flex-col justify-start items-center font-semibold py-7 ${active ? "transition bg-purple-600 text-white"  : "text-neutral-700"}`} onClick={handleActive}>
            <div className="flex items-center justify-center rounded-md">
                <Icon size={22}/>
            </div>
            <p className="text-lg">{title}</p>
        </div>
    </Link>
  )
}
export default LinkElement