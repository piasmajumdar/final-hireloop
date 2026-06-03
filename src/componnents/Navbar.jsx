"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            label: "Browse Jobs",
            href: "/jobs",
        },
        {
            label: "Company",
            href: "/company",
        },
        {
            label: "Pricing",
            href: "/pricing",
        },
    ];

    return (
        <header className="w-full bg-[#0b0b0f] px-4 py-4 md:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/5 bg-[#111114]/90 px-6 py-4 backdrop-blur-lg">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        <span className="text-[#0A84FF]">hire</span>

                        <span className="relative inline-flex items-center">
                            <span className="text-[#0A84FF]">G</span>

                            {/* Orange Circle */}
                            <span className="absolute left-[13px] top-[8px] h-3 w-3 rounded-full bg-orange-500"></span>

                            {/* Blue Circle */}
                            <span className="absolute left-[5px] top-[8px] h-3 w-3 rounded-full bg-sky-400"></span>
                        </span>

                        <span className="text-orange-500">op</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-10 lg:flex">
                    <nav className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-white/80 transition hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="h-6 w-px bg-white/10"></div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/signin"
                            className="text-lg font-medium text-[#6C63FF] hover:text-[#7d75ff]"
                        >
                            Sign In
                        </Link>

                        <Button
                            as={Link}
                            href="/get-started"
                            className="h-12 rounded-xl bg-[#5B5EF7] px-7 text-base font-semibold text-white hover:bg-[#6b6efc]"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-white lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/5 bg-[#111114] p-6 lg:hidden">
                    <nav className="flex flex-col gap-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-white/80 transition hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="my-2 h-px bg-white/10"></div>

                        <Link
                            href="/signin"
                            className="text-[#6C63FF]"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </Link>

                        <Button
                            as={Link}
                            href="/get-started"
                            className="mt-2 bg-[#5B5EF7] font-semibold text-white"
                        >
                            Get Started
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}