"use client";

import Image from "next/image";
import {
    Briefcase,
    Factory,
    CircleInfo,
    Star,
} from "@gravity-ui/icons";
import HeroSearchSection from "./HeroSearchSection";
import FeaturedJobsSection from "./FeaturedJobsSection";

const stats = [
    {
        icon: Briefcase,
        value: "50K",
        label: "Active Jobs",
    },
    {
        icon: Factory,
        value: "12K",
        label: "Companies",
    },
    {
        icon: CircleInfo,
        value: "2M",
        label: "Job Seekers",
    },
    {
        icon: Star,
        value: "97%",
        label: "Satisfaction Rate",
    },
];

export default function GlobalStatsSection() {
    return (
        <section className="relative overflow-hidden bg-black pb-24 pt-40">
            {/* Purple Glow */}
            <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#5B5EF7]/40 blur-[150px]" />

            {/* Globe */}
            <div className="absolute inset-0">
                <Image
                    src="/images/globe.png"
                    alt="Globe"
                    fill
                    priority
                    className="object-cover object-center opacity-70"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                <div>
                    <HeroSearchSection></HeroSearchSection>
                </div>
                <div>
                    {/* Heading */}
                    <div className="mb-16 flex justify-center">
                        <h2 className="max-w-3xl text-center text-3xl font-medium leading-tight text-white md:text-5xl">
                            Assisting over{" "}
                            <span className="font-semibold">
                                15,000
                            </span>{" "}
                            job seekers
                            <br />
                            find their dream positions.
                        </h2>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {stats.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-md transition hover:border-[#5B5EF7]/40"
                                >
                                    <Icon className="mb-10 h-6 w-6 text-white/80" />

                                    <h3 className="mb-2 text-5xl font-bold text-white">
                                        {item.value}
                                    </h3>

                                    <p className="text-base text-white/70">
                                        {item.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}