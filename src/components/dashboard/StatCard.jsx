import React from "react";
import { Card } from "@heroui/react";

export const StatCard = ({ title, value, icon: Icon, iconColor = "text-neutral-400" }) => {
    return (
        <Card className="border border-neutral-800 bg-[#121212] p-4 text-white shadow-md">
            <Card.Header className="p-2 pb-0">
                {/* Icon Wrapper matches your black box layout perfectly */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
                    {Icon && <Icon className={`h-5 w-5 ${iconColor}`} />}
                </div>
            </Card.Header>

            <Card.Content className="flex flex-col gap-1 p-2 pt-4">
                {/* Title & Numeric Values */}
                <p className="text-sm font-medium text-neutral-400 tracking-wide">
                    {title}
                </p>
                <p className="text-3xl font-bold text-neutral-100 tabular-nums">
                    {value}
                </p>
            </Card.Content>
        </Card>
    );
};