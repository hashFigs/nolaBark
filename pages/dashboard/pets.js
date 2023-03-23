/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Modal from 'react-modal'
import LayoutDashboard from "../../components/layoutDasboard"
import {  useSession } from "next-auth/react"
import { userAgent } from "next/server";


export default function Pets() {

    const [isOpen, setIsOpen] = useState(false)
    const [petName, setPetName] = useState('');
    const [petSize, setPetSize] = useState('')

    const { data: session } = useSession()
    const user = session?.user;
    const user_final = user?.user;
  console.log("USERR", user_final?.userId)

  /*
  useEffect(() => {
    setLoading(true)
    fetch('/api/pets/getpets')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

*/


const savePet = async (e) => {
  try {
		const res = await fetch("/api/pets/addpet", {
            method: "POST",
            body: JSON.stringify({name:petName, size: petSize, userId: user_final?.userId}),
            headers: {
                "Content-Type": "application/json",
                // token saved in db
                // userId  
             },
        });
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}

}


const handleSubmit = (e) => {
    setShowModal(true);
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
            <p class="text-2xl text-gray-400 dark:text-gray-500"> lets start by including your favorite pet.</p>
        </div>
        <div class="flex items-center justify-center h-24 rounded  ">
            
                <button 
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick = {() => setIsOpen(true)}
                    type="submit"
                    
                    > Add your pet
                </button>
            
        </div>

       
        <p> {`email: ${user_final?.email}`}</p>
        <p> {`userId: ${user_final?.userId}`}</p>
        <p> {`token: ${user_final?.token}`}</p>
      
    </div>    

    <div>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles} >
            
            <h1>Pet Info Content</h1>
            <form>
            <label
                htmlFor="petname"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
            Pet Name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          
          <input
            type="text"
            value={petName}
            onChange={(e) => {
              setPetName(e.target.value);
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
            Pet Size<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          
          <input
            type="text"
            value={petSize}
            onChange={(e) => {
              setPetSize(e.target.value);
            }}
            name="petSize"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
             <br>
          </br>
          <br></br>

            </form>
            
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
            <button 
            className = "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
            onClick={() => savePet()}>Save Pet</button>
         </Modal>
      </div>
  
    </LayoutDashboard>
    </>
)
}