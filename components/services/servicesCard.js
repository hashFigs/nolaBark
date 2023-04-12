import Image from "next/image"
import Link from "next/link"

export default function ServiceCard({title, description, price, image}) {
    const imagePath = `/images/${image}`
    
    return(
        <>
          <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
            <div>
                <Image
                    priority
                    className='h-64 w-full object-cover object-bottom'
                    src={imagePath}
                    height={144}
                    width={1400}
                    alt=""
                />
            
            </div>
            
            <div class="bg-white ">               
                <div class="py-6">
                    <div class="flex items-center">
                        <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">{ title }</h2>
                    </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">{ description }</p>
                               
                    </div>

                    <button 
                      className="px-8 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                    >Get Started: ${price}</button> 
                
                </div>
          </div>        
        </>
    )
}