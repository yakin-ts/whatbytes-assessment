"use client"

import React from 'react'
import { CircleUserRound} from 'lucide-react'
import SheetMenu from "./sheet-menu"


const Navbar = () => {

    return (
        <div className="w-full flex justify-between items-center py-8 px-6 border-b text-black">
            <SheetMenu />
            <div className="text-xl md:text-2xl font-bold">WhatBytes</div>
            <div className="flex justify-start items-center space-x-2 border rounded-md px-1 py-2">
                <div className="rounded-full  text-secondary"><CircleUserRound size={28} /></div>
                <div className="hidden sm:flex font-semibold">Yakin Teshome</div>
            </div>
        </div>
    )
}

export default Navbar
