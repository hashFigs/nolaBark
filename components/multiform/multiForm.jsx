import Location from './location'
import Petinfo from './petinfo'
import { useState } from 'react'
import {  useSession } from "next-auth/react"



export default function MultiForm() {
const [page, setPage] = useState(0);
const [formData, setFormData] = useState({
  name: '',
  lastname: '',
  streetAdress: '',
  city: '',
  zipCode: '',
  petName: '',
  petAge: '',
  petSize: '',
  petBreed: '',
});

const { data: session } = useSession()
const user = session?.user;
const user_final = user?.user;

const handleNextSubmit = async (e) => {
    e.preventDefault();
    
    if (page === 0) {
      setPage(page + 1);
      console.log(formData)
      } 
  
    else {
      console.log(formData);
      const token = user_final.token
      const res = await fetch("/api/users/initialsetup", {
        method: "POST",
            body: JSON.stringify(
                  {
                    name:formData.petName,
                    lastname: formData.lastname, 
                    streetAdress: formData.streetAdress,
                    city: formData.city,
                    zipCode: formData.zipCode,
                    petName: formData.petName,
                    petAge: formData.petAge,
                    size: formData.petSize, 
                    breed: formData.petBreed, 
                    userId: user_final?.userId
                  }
                ),
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,  
            
             },
    });
      const data = await res.json();
      console.log(data);
    }  
} 


const conditionalComponent = () => {
  switch (page) {
    case 0:
      return <Location formData={formData} setFormData={setFormData} />;
    case 1:
      return <Petinfo formData={formData} setFormData={setFormData}/>;
    default:
       return <Location formData={formData} setFormData={setFormData} />;
  }
}

  return (
    <>  
    <div class="container mx-auto w-4/5 md:w-4/5 lg:w-3/5">    
      <div class="grid grid-cols-1 gap-6">


        {conditionalComponent()}

        <div class="p-2 flex">
          <div class="w-2/5"></div>
          <div class="w-1/2">
          
            <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                  onClick={handleNextSubmit}>
                  { page === 0  ? "Next" : "Submit" }
            </button>
            
            { page > 0 && <button 
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  
                  onClick={() => setPage(page - 1)}>
                  Prev
            </button>
           }
              
          </div>
         </div>
       </div>
      </div>
        
        
  
    </>
    
    )
}

