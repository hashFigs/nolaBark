import LayoutDashboard from "../../components/layoutDasboard"
import { signOut, useSession } from "next-auth/react"
import { useState, useEffect } from "react";
import { add } from "date-fns";
import MultiForm from '../../components/multiform/multiForm'



export default function Index() {

    const { data: session } = useSession()
    const user = session?.user;
    const user_final = user?.user;

    const [locations, setLocations] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    
    useEffect(() => {
    
        const fetchUserLocations =async () => {
          const token = user_final.token
       
          const res = await fetch("/api/locations/getlocations", {
            method: "GET",
            headers: {
                 "Content-Type": "application/json",
                  "Authorization" : `Bearer ${token}`,  
    
                 },
                });
          console.log("res", res)      
    
          const data = await res.json();  

          console.log("data", data)
          
          setLocations(data);
          setAddress(data[0].address)
          setCity(data[0].city)
          setZip(data[0].zip)      
          console.log("locations", locations)
        }
        
        fetchUserLocations()
        .catch(console.error);
      }, [])
      
      console.log("address", address);

      
      const conditionalComponent = () => {
        if(!address){
            return(
            <>    
            <MultiForm />
            </>)         
          }else{
            return(
                <>
        <h1> there is a location</h1>
        </> 
            )
        }
      }
       


      
   
    
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


                {conditionalComponent()} 
                
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                   <h1>Welcome to your dashboard</h1>
                    
                </div>
            </div>
            </>
        )
        }
}