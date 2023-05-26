import Image from "next/image"
import Link from "next/link"
import {  useSession } from "next-auth/react"


export default function PetCard({name, size, breed, image, petId, setPets}) {
    const imagePath = `/images/${image}`
    const { data: session } = useSession()
    const user = session?.user;
    const user_final = user?.user;

    const removePet = async () => {
        const token = user_final.token


        const petRemoved = fetch("/api/pets/removepet", {
            method: "DELETE",
            body: JSON.stringify({petId: petId}),
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,  

                     },
                    });

      console.log("petRemoved", petRemoved)  

        const res = await fetch("/api/pets/getpets", {
            method: "GET",
            headers: {
                 "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,  

                 },
                });
        const data = await res.json();     
       // setPets(data);            
    }


    return(
        <>
          <div tabIndex="0" class=" rounded-xl pb-2 bg-orange-200 focus:outline-none mx-2 w-80 xl:mb-0 mb-8 border-b border-gray-300 dark:border-gray-700">
              <div className="relative">
                <Image
                    priority
                    className='rounded-xl h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]'
                    src={imagePath}
                    height={144}
                    width={500}
                    alt=""
                />

                    <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffd8ab" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg> 
                    </div>

            
                <div class="flex flex-row bg-orange-200">                  
                    <div class=" p-4 w-3/5 justify-center">
                        
                        <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">{ name }</h2>
                        <p tabindex="0" class="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">{ breed}</p>             
                    </div>
                    
                    <div class="p-4"> 
                    <button class="bg-orange-200 focus:outline-none" onClick={removePet}>
                        <svg class="w-6 h-6 " fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                        </svg>   
                        </button>
                    </div>
                </div>
          </div>        
        </>
    )
}
