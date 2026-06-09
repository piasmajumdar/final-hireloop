"use client"
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { useSession } from "@/lib/auth-client";
import { File, Persons, Thunderbolt, CircleCheck, Briefcase, Bookmark, Eye } from "@gravity-ui/icons";

const RecruiterDashboardHomePage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return <div>Loading....</div>
    }

    const user = session?.user;
    console.log("Session data in RecruiterDashBoardHomePage:", session)

    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: File },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt, iconColor: "text-yellow-500" },
        { title: "Jobs Closed", value: "32", icon: CircleCheck, iconColor: "text-emerald-500" },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Welcome back, {user?.name}</h2>
            <DashboardStats statsData={recruiterStats}></DashboardStats>
        </div>
    );
};

export default RecruiterDashboardHomePage;