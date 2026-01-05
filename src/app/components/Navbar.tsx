'use client'
import Link from "next/link";
import { Logo } from "./Logo";
import { ModeToggle } from "./Theme/ToggleTheme";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mblView, setmblView] = useState(false)
    const path = usePathname()
    return (
        <header className="sticky top-0 z-10 border-b shadow-lg border-b-black/10 dark:border-b-white/10 backdrop-blur-2xl  dark:text-white text-black py-1.5 px-2 sm:px-6 flex justify-between items-center">
            <Link href="/" className="logo flex items-center gap-2">
                <Logo className="h-12" />    <div><span className="">Link</span><span className="font-bold text-xl">Snap</span></div>
            </Link>
            <div className="flex  flex-row-reverse sm:flex-row gap-2 sm:gap-6 items-center">
                <Menu
                    onClick={() => setmblView(true)}
                    className="block sm:hidden" />
                <ul className="nav hidden gap-8 sm:flex">
                    <Link className={`opacity-80 hover:opacity-100 ${path === '/' && 'opacity-100 font-semibold'}`} href="/">Home</Link>
                    <Link className={`opacity-80 hover:opacity-100 ${path === '/about' && 'opacity-100 font-semibold'}`} href="/about">About</Link>
                    <Link className={`opacity-80 hover:opacity-100 ${path === '/contact' && 'opacity-100 font-semibold'}`} href="/contact">Contact Us</Link>
                </ul>
                {mblView && <ul className="nav absolute top-16 left-0 w-full h-[89.5vh] p-5 items-center justify-center bg-gray-200  text-black dark:text-white dark:bg-gray-900 flex flex-col gap-8">
                    <div className="flex gap-2 items-center border border-gray-700 p-2 rounded-2xl"><Logo className="h-12" /><div><span className="">Link</span><span className="font-bold text-xl">Snap</span></div></div>
                    <Link onClick={()=> setmblView(!mblView)} 
                    className={`opacity-80 hover:opacity-100 ${path === '/' && 'opacity-100 font-semibold'}`} href="/">Home</Link>
                    <Link onClick={()=> setmblView(!mblView)} 
                    className={`opacity-80 hover:opacity-100 ${path === '/about' && 'opacity-100 font-semibold'}`} href="/about">About</Link>
                    <Link onClick={()=> setmblView(!mblView)} 
                    className={`opacity-80 hover:opacity-100 ${path === '/contact' && 'opacity-100 font-semibold'}`} href="/contact">Contact Us</Link>
                </ul>}
                <ModeToggle />
            </div>

        </header>
    )
}
