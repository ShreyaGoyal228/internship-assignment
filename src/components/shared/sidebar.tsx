"use client";
import { useState } from "react";
import { ChartNoAxesColumn, Award, StickyNote } from "lucide-react";

const sidebarItems = [
    { name: "Dashboard", icon: ChartNoAxesColumn },
    { name: "Skill Test", icon: Award },
    { name: "Internship", icon: StickyNote },
];

export function Sidebar() {
    const [selected, setSelected] = useState("Skill Test");

    return (
        <>
            <aside className="xl:w-56 2xl:w-[400px] bg-gray-100 h-screen py-6 pr-3 border-r  ">
                {sidebarItems.map((item) => (
                    <button
                        key={item.name}
                        className={`flex items-center w-full px-3 py-4 mt-2 rounded-tr-full rounded-br-full transition-colors font-bold text-sm ${
                            selected === item.name ? " text-blue-700 bg-[#e0e0e9]" : "text-gray-600"
                        }`}
                        onClick={() => setSelected(item.name)}
                    >
                        <item.icon className="h-5 w-5 mr-4" />
                        {item.name}
                    </button>
                ))}
            </aside>
        </>
    );
}
