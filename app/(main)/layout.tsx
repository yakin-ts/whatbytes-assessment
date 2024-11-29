import React from 'react'
import Navbar from "./_components/navbar"
import Sidebar from "./_components/sidebar"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="w-full h-full flex">
                <Sidebar />
                <div className="container">
                {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout