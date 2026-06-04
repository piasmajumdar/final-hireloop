"use client";

import { Button, Input, Chip } from "@heroui/react";
import { Magnifier, MapPin, Briefcase } from "@gravity-ui/icons";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden px-6 pb-50">
            {/* Background Glow */}

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl text-center">
                {/* Badge */}
                <div className="mb-10 flex justify-center">
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0f0f13] px-5 py-3 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                        <Briefcase className="h-5 w-5 text-orange-400" />

                        <span className="font-semibold text-white">
                            50,000+
                        </span>

                        <span className="uppercase tracking-widest text-white/50">
                            New Jobs This Month
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">
                    Find Your Dream Job Today
                </h1>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
                    HireLoop connects top talent with world-class companies.
                    Browse thousands of curated opportunities and land your
                    next role — faster.
                </p>

                {/* Search Box */}
                <div className="mx-auto mt-12 max-w-5xl">
                    <div className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d11] shadow-[0_0_50px_rgba(255,255,255,0.03)] md:flex-row">

                        {/* Job Search */}
                        <div className="flex flex-1 items-center px-6">
                            <Magnifier className="mr-3 h-6 w-6 text-white/50" />

                            <Input
                                variant="underlined"
                                placeholder="Job title, skill or company"
                                classNames={{
                                    input:
                                        "text-white placeholder:text-white/40",
                                    inputWrapper:
                                        "!bg-transparent shadow-none border-none",
                                }}
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden w-px bg-white/10 md:block" />

                        {/* Location */}
                        <div className="flex flex-1 items-center px-6">
                            <MapPin className="mr-3 h-6 w-6 text-white/50" />

                            <Input
                                variant="underlined"
                                placeholder="Location or Remote"
                                classNames={{
                                    input:
                                        "text-white placeholder:text-white/40",
                                    inputWrapper:
                                        "!bg-transparent shadow-none border-none",
                                }}
                            />
                        </div>

                        {/* Search Button */}
                        <div className="p-3">
                            <Button
                                isIconOnly
                                className="h-14 w-14 rounded-2xl bg-[#5B5EF7] text-white"
                            >
                                <Magnifier className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Trending */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <span className="text-lg text-white/60">
                        Trending Position
                    </span>

                    <Chip
                        variant="bordered"
                        className="border-white/10 bg-white/5 text-white"
                    >
                        Product Designer
                    </Chip>

                    <Chip
                        variant="bordered"
                        className="border-white/10 bg-white/5 text-white"
                    >
                        AI Engineering
                    </Chip>

                    <Chip
                        variant="bordered"
                        className="border-white/10 bg-white/5 text-white"
                    >
                        Dev-ops Engineer
                    </Chip>
                </div>
            </div>
        </section>
    );
}