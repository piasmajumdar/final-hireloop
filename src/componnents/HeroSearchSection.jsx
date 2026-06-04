"use client";

import { Button, Input, Chip } from "@heroui/react";
import { Magnifier, MapPin, Briefcase } from "@gravity-ui/icons";

export default function HeroSearchSection() {
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

                {/* Search */}
                <div className="mx-auto mt-14 max-w-6xl">
                    <div className="flex h-[74px] items-center rounded-[24px] border border-white/15 bg-[#0B0B0E]/90 px-4 backdrop-blur-md">

                        {/* Job Search */}
                        <div className="flex flex-1 items-center gap-4 px-4">
                            <Magnifier
                                className="text-white"
                                width={28}
                                height={28}
                            />

                            <input
                                type="text"
                                placeholder="Job title, skill or company"
                                className="w-full bg-transparent text-lg text-white placeholder:text-white/50 focus:outline-none"
                            />
                        </div>

                        {/* Divider */}
                        <div className="mx-4 hidden h-8 w-px bg-white/15 md:block" />

                        {/* Location */}
                        <div className="hidden flex-1 items-center gap-4 px-4 md:flex">
                            <MapPin
                                className="text-white"
                                width={26}
                                height={26}
                            />

                            <input
                                type="text"
                                placeholder="Location or Remote"
                                className="w-full bg-transparent text-lg text-white placeholder:text-white/50 focus:outline-none"
                            />
                        </div>

                        {/* Search Button */}
                        <Button
                            isIconOnly
                            className="h-[54px] min-w-[54px] rounded-[18px] bg-[#5B5EF7] text-white hover:bg-[#696CFF]"
                        >
                            <Magnifier width={26} height={26} />
                        </Button>
                    </div>
                </div>

                {/* Trending */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <span className="text-[18px] text-white/60">
                        Trending Position
                    </span>

                    <Chip
                        radius="full"
                        className="border border-white/10 bg-white/5 px-3 text-white"
                    >
                        Product Designer
                    </Chip>

                    <Chip
                        radius="full"
                        className="border border-white/10 bg-white/5 px-3 text-white"
                    >
                        AI Engineering
                    </Chip>

                    <Chip
                        radius="full"
                        className="border border-white/10 bg-white/5 px-3 text-white"
                    >
                        Dev-ops Engineer
                    </Chip>
                </div>

            </div>
        </section>
    );
}