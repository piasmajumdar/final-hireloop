import { requireRole } from "@/lib/core/session";

const layout = async({children}) => {
    await requireRole('recruiter')
    return children;
};

export default layout;