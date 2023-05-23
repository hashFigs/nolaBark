import Location from './location'
import Petinfo from './petinfo'
import { useState } from 'react'


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

const handleNext = async (e) => {
    e.preventDefault();
    setPage(page + 1);
} 
const handlePrev = async (e) => {
  e.preventDefault();
  setPage(page - 1);
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
                  
                  disabled={page === 1}
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                  onClick={handleNext}>
                  Next
            </button>
            
            <button 
                  disabled={page === 0}
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  
                  onClick={handlePrev}>
                  Prev
            </button>
              
          </div>
         </div>
       </div>
      </div>
        
        
  
    </>
    
    )
}


/*

    */