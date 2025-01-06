import {User} from "lucide-react"
import Image from "next/image"
export function Header() {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-100 border-b">
        <div className="flex items-center gap-2">
            <div className="relative aspect-square w-[50px]">
          <Image src={"/logo.png"} alt="whatBytes-logo" fill
          />
          </div>
          <h1 className="text-2xl font-bold">WhatBytes</h1>
        </div>
        <div className="flex items-center border-2 rounded-lg p-2">
          <User className="h-5 w-5 text-gray-500 mr-2" />
          <span className="font-bold text-base">Shreya Goyal</span>
        </div>
      </header>
    )
  }