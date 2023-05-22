import LayoutDashboard from "../../components/layoutDasboard"
import { signOut, useSession } from "next-auth/react"


export default function Index() {
    const { data: session } = useSession()
    const user = session?.user;
    const user_final = user?.user;
    


    if(!user) {
        return(
        <h1> Please log in</h1>
        )
    }
    else{
        return(
            <>
            <LayoutDashboard home> </LayoutDashboard>
        
            <div class="p-4 sm:ml-64">
            <div class="grid grid-cols-6 gap-4">
                <div class="col-end-7 col-span-2 ...">
                    <p>welcome: </p>
                    <p >{user_final?.email}</p>
                </div>   
                </div>
                
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                   <h1>Welcome to your dashboard</h1>
                    
                </div>
            </div>
            </>
        )
        }
}