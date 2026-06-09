"use client";

import Link from "next/link";

import {
    LogoFacebook,
    LogoLinkedin,
    LogoGithub,
} from "@gravity-ui/icons";

export default function Footer() {
    return (
        <footer className="bg-black px-6 py-16 text-white md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">

                {/* Top Section */}
                <div className="grid gap-14 lg:grid-cols-4">

                    {/* Left Section */}
                    <div className="space-y-8">

                        {/* Logo */}
                        <Link href="/" className="inline-block">
                            <h1 className="text-5xl font-extrabold tracking-tight">
                                <span className="text-[#0A84FF]">hire</span>

                                <span className="relative inline-flex items-center">
                                    <span className="text-[#0A84FF]">L</span>

                                    {/* Blue Circle */}
                                    <span className="absolute left-[7px] top-[10px] h-4 w-4 rounded-full bg-sky-400"></span>

                                    {/* Orange Circle */}
                                    <span className="absolute left-[16px] top-[10px] h-4 w-4 rounded-full bg-orange-500"></span>
                                </span>

                                <span className="text-orange-500">oop</span>
                            </h1>
                        </Link>

                        {/* Description */}
                        <p className="max-w-sm text-lg leading-8 text-white/35">
                            The AI-native career platform. Built for people who
                            take their work seriously.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-10">

                            {/* Facebook */}
                            <Link
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111111] text-white/60 transition hover:bg-[#1b1b1b] hover:text-white"
                            >
                                <LogoFacebook className="h-5 w-5" />
                            </Link>

                            {/* Pinterest */}
                            <Link
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5B5EF7] text-white transition hover:bg-[#6b6efc]"
                            >
                                <LogoGithub className="h-5 w-5" />
                            </Link>

                            {/* Linkedin */}
                            <Link
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111111] text-white/60 transition hover:bg-[#1b1b1b] hover:text-white"
                            >
                                <LogoLinkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-8 text-xl font-semibold text-[#5B5EF7]">
                            Product
                        </h3>

                        <ul className="space-y-5">
                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Job discovery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Worker AI
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Companies
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Salary data
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigations */}
                    <div>
                        <h3 className="mb-8 text-xl font-semibold text-[#5B5EF7]">
                            Navigations
                        </h3>

                        <ul className="space-y-5">
                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Help center
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Career library
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-8 text-xl font-semibold text-[#5B5EF7]">
                            Resources
                        </h3>

                        <ul className="space-y-5">
                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Brand Guideline
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="text-lg text-white/35 transition hover:text-white"
                                >
                                    Newsroom
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/30 md:flex-row">

                    <p>
                        Copyright 2024 — Hireloop
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white">
                            Terms & Policy
                        </Link>

                        <Link href="#" className="hover:text-white">
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}