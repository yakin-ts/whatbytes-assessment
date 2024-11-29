"use client"

import React from 'react'
import Link from "next/link"
import { useCurrentTab } from "@/hooks/useCurrentTab"
import { cn } from "@/lib/utils"

import { sidebarContent } from "@/contents/sidebar-content"

const Sidebar = () => {
    const currentTab = useCurrentTab()

    return (
        <aside className="hidden md:flex flex-col h-[calc(100vh-100px)] border-r pr-2 w-fit pt-10 font-semibold">
            {sidebarContent.map((item, index) => {
                const isActive = "/" + currentTab === item.href
                return (
                    <Link 
                        href={item.href} 
                        key={index}
                        className={cn(
                            "flex gap-x-2 pr-8 hover:text-blue-600 text-lg",
                            isActive ? "bg-gray-200 rounded-tr-full rounded-br-full text-blue-700" : "text-gray-600"
                        )}
                    >
                        <div className="p-4"><item.icon /></div>
                        <div className="p-4">{item.title}</div>
                    </Link>
                )
            })}
        </aside>
    )
}

export default Sidebar