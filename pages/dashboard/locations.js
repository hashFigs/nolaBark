/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import Modal from 'react-modal'
import LayoutDashboard from "../../components/layoutDasboard"
import {  useSession } from "next-auth/react"

import PetsList from "../../components/pets/petsList"
import { set } from "date-fns";

export default function Locations() {

    const [isOpen, setIsOpen] = useState(false)
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [locations, setLocations] = useState([]);

    const { data: session } = useSession()
    const user = session?.user;
    const user_final = user?.user;

  
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
      console.log("data", data[0].address)
      
      setLocations(data);
      setAddress(data[0].address)
      setCity(data[0].city)
      setZip(data[0].zip)      
      console.log("locations", locations)
    }
    
    fetchUserLocations()
    .catch(console.error);
  }, [])


const saveLocation = async (e) => {
  const token = user_final.token
  try {
		const res = await fetch("/api/locations/addlocation", {
            method: "POST",
            body: JSON.stringify({address:address, city: city, userId: user_final?.userId}),
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,  
                
             },
        });
		const data = await res.json();
        setIsOpen(false);
	} catch (err) {
		console.log(err);
	}

}


const customStyles = {
    overlay: {
       backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       transform: 'translate(-50%, -50%)'
    }
 }



return(
    <>
    <LayoutDashboard home>
     
    <div class="grid grid-cols-5 gap-4 mb-4">
        <div class="flex items-center justify-center h-24 rounded  col-span-4">
            <p class="text-2xl text-gray-400 dark:text-gray-500"> lets start adding your location.</p>
        </div>
        <div class="flex items-center justify-center h-24 rounded  ">
            
                <button 
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick = {() => setIsOpen(true)}
                    type="submit"
                    
                    > Add your Location
                </button>
            
        </div>
      
      
    </div>    

     
   <h2>Adress: {address}</h2>
   <h2>City: {city}</h2>
    <h2>Zip: {zip}</h2> 

    <div>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles} >
            
            <h1>Locations</h1>
            <form>
            <label
                htmlFor="address"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
            Address<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          <br>
          </br>
          <br></br>
          
          <label
                htmlFor="petSize"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
            City<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          
          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            name="city"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
             <br>
          </br>
          <br></br>

            </form>
            
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
            <button 
            className = "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
            onClick={() => saveLocation()}>Save Location</button>
         </Modal>
      </div>
  
    </LayoutDashboard>
    </>
)
           
}