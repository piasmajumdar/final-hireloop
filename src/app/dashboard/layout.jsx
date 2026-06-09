import DashboardSideBar from "@/components/dashboard/DashboardSideBar";

const DashBoardLayout = ({ children }) => {
    return (
        <div className="pt-30 flex min-h-screen">
            <DashboardSideBar></DashboardSideBar>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default DashBoardLayout;