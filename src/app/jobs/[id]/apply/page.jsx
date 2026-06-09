import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

const ApplyPage = async({params})=>{

    const {id} = await params;
    
    const user = await getUserSession();

    if(!user){
        redirect(`/auth/signin?redirect=/jobs/${id}/apply`)
    }
    return (
        <div className="pt-30">
        <h1>Apply here for this job</h1>
        </div>
    )
}

export default ApplyPage;