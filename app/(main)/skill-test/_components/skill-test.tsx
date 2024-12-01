import React from 'react'
import { IconType } from "react-icons";
import { UpdateDialog } from "./update-dialog";

interface SkillTestProps {
    title: string;
    description: string;
    icon: IconType;
}


const SkillTest: React.FC<SkillTestProps> = ({ icon, title, description }) => {
    return (
        <div className="flex py-4 px-2 border rounded-md">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs font-semibold text-black">HTML</span>
              <span className="text-orange-500 text-4xl ">{React.createElement(icon)}</span>
            </div>
            <div className="ml-4 flex flex-col items-start justify-start mr-3">
              <h4 className="font-bold text-black">{title}</h4>
              <p className="text-xs">{description}</p>
            </div>
            <UpdateDialog />
          </div>
    )
}

export default SkillTest
