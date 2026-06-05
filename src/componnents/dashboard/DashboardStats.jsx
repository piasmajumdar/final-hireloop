import React from "react";
import { StatCard } from "./StatCard";

export const DashboardStats = ({ statsData }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {statsData.map((stat, index) => (
                <StatCard
                    key={stat.id || index}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    iconColor={stat.iconColor}
                />
            ))}
        </div>
    );
};