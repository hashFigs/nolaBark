import LayoutDashboard from "../../components/layoutDasboard"
import { signOut, useSession } from "next-auth/react"
import { useState, useEffect } from "react";
import { add } from "date-fns";
import MultiForm from '../../components/multiform/multiForm'
import PersonalInfo from "./personalInfo";


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
    
          const data = await res.json();  
          
          setLocations(data);
          setAddress(data[0].address)
          setCity(data[0].city)
          setZip(data[0].zip)      
        }
        
        fetchUserLocations()
        .catch(console.error);
      }, [])
      

      const conditionalComponent = () => {
        if(!address){
            return(
            <>    
            <MultiForm />
            </>)         
          }else{
            return(
                <>
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
                
                <div class="p-4">
                   
                   <PersonalInfo user={user} city={city} address={address} zip={zip}/>
                    
                </div>
            </div>
            </>
        )
        }
}