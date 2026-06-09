import FeaturedJobsSection from "@/components/FeaturedJobsSection";
import GlobalStatsSection from "@/components/GlobalStatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <GlobalStatsSection></GlobalStatsSection>
      <FeaturedJobsSection></FeaturedJobsSection>
    </div>
  );
}
