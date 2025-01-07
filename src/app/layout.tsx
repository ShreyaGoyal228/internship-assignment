import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";
import { Sidebar } from "@/components/shared/sidebar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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
                    <div className="p-8 2xl:p-9 w-full">{children}</div>
                </div>
            </body>
        </html>
    );
}
