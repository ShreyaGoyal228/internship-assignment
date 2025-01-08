import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shared/header";
import { Sidebar } from "@/components/shared/sidebar";


export const metadata: Metadata = {
    title: "WhatBytes Skill test",
    description: "WhatBytes Skill Test - Internship Assignment By Shreya",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="flex items-start">
                    <Sidebar />
                    <div className="p-5 lg:p-8 2xl:p-9 w-full">{children}</div>
                </div>
            </body>
        </html>
    );
}
