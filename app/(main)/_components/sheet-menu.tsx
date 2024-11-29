"use client"

import React, { useState } from 'react'
import { Menu } from "lucide-react"
import Link from "next/link"
import {
    Sheet,
    SheetTrigger,
    SheetContent
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { sidebarContent } from "@/contents/sidebar-content"
import { Button } from "@/components/ui/button"
import { useCurrentTab } from "@/hooks/useCurrentTab"


const SheetMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const currentTab = useCurrentTab()

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex md:hidden" asChild>
                <Button variant={"outline"} size={"default"}>
                    <Menu size={48} strokeWidth={2}/>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="flex flex-col pr-2 w-fit pt-10 font-semibold">
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
            </SheetContent>
        </Sheet>
    )
}

export default SheetMenu
