"use client"

import { useState, useEffect } from "react"
import { Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface PayrollHeaderProps {
    companyName: string
    logoSrc?: string
}

export function Header({ companyName, logoSrc }: PayrollHeaderProps) {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ease-in-out",
                !isVisible && "-translate-y-full",
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    {logoSrc ? (
                        <img src={logoSrc || "/placeholder.svg"} alt={`${companyName} logo`} className="h-10 w-auto" />
                    ) : (
                        <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold">
                            {companyName.charAt(0)}
                        </div>
                    )}
                </div>

                <h1 className="text-xl font-bold text-center hidden md:block">{companyName}</h1>

                <h1 className="text-lg font-bold text-center md:hidden">{companyName}</h1>

                <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Settings">
                    <Settings className="h-5 w-5" />
                </button>
            </div>
        </header>
    )
}

