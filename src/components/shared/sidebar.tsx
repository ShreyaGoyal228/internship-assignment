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
            <aside className="hidden md:block md:w-[200px] lg:w-[300px] 2xl:w-[400px] min-h-screen py-6 pr-1 lg:pr-3 border-r sticky top-0">
                {sidebarItems.map((item) => (
                    <button
                        key={item.name}
                        className={`flex items-center w-full px-3 py-4 mt-2 rounded-tr-full rounded-br-full transition-colors font-bold text-sm ${
                            selected === item.name ? " text-blue-700 bg-[#e0e0e9]" : "text-gray-600"
                        }`}
                        onClick={() => setSelected(item.name)}
                    >
                        <item.icon className="size-5 2xl:size-7 mr-4" />
                        <span className="text-sm lg:text-base 2xl:text-lg">{item.name}</span>
                    </button>
                ))}
            </aside>
        </>
    );
}
