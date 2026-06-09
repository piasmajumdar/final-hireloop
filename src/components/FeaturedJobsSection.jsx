"use client";

import Link from "next/link";
import {
    ArrowRight,
    MapPin,
    Briefcase,
} from "@gravity-ui/icons";

const jobs = Array(6).fill({
    title: "Frontend Developer",
    description:
        "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
});

export default function FeaturedJobsSection() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <div className="h-2 w-2 bg-[#5B5EF7]" />

                        <span className="font-mono text-sm uppercase tracking-[0.2em] text-white/60">
                            Smart Job Discovery
                        </span>

                        <div className="h-2 w-2 bg-[#5B5EF7]" />
                    </div>

                    <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                        The roles you'd never
                        <br />
                        find by searching
                    </h2>
                </div>

                {/* Job Grid */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {jobs.map((job, index) => (
                        <article
                            key={index}
                            className="group rounded-3xl border border-white/5 bg-[#111114] p-8 transition-all duration-300 hover:border-[#5B5EF7]/30 hover:bg-[#141418]"
                        >
                            <h3 className="mb-4 text-3xl font-medium text-white">
                                {job.title}
                            </h3>

                            <p className="mb-8 text-sm leading-7 text-white/45">
                                {job.description}
                            </p>

                            {/* Tags */}
                            <div className="mb-10 flex flex-wrap gap-2">
                                <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-white/80">
                                    <MapPin className="h-3.5 w-3.5 text-[#D88CFF]" />
                                    {job.location}
                                </span>

                                <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-white/80">
                                    <Briefcase className="h-3.5 w-3.5 text-[#D88CFF]" />
                                    {job.type}
                                </span>

                                <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-white/80">
                                    <Briefcase className="h-3.5 w-3.5 text-[#D88CFF]" />
                                    {job.salary}
                                </span>
                            </div>

                            {/* CTA */}
                            <Link
                                href="/jobs/frontend-developer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-[#5B5EF7]"
                            >
                                Apply Now
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-14 flex justify-center">
                    <button className="rounded-xl bg-white px-8 py-4 font-medium text-black transition hover:bg-gray-200">
                        View all job open
                    </button>
                </div>
            </div>
        </section>
    );
}