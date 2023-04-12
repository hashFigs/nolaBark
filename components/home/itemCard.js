import Image from "next/image"
import Link from "next/link"

export default function ItemCard({title, description, price, image, link}) {
    const imagePath = `/images/${image}`
    
    return(
        <>
          <div tabIndex="0" class=" p-2 bg-white focus:outline-none mx-2 w-72 xl:mb-0 mb-8 border-b border-gray-300 dark:border-gray-700">
            
                <Image
                    priority
                    className='h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]
                    '
                    src={imagePath}
                    height={144}
                    width={800}
                    alt=""
                />
            
        
            
            <div class="bg-white dark:bg-gray-800">               
                <div class="p-4 justify-center">
                    <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">{ title }</h2>
                    <p tabindex="0" class="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">{ description }</p>   
                               
                </div>

                <div class="flex justify-center">   
                    <Link href={`${link}`}>
                    <button 
                      className=" px-8 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                    >LEARN MORE</button> 
                    </Link>
                    </div>
                    </div>
            
          </div>        
        </>
    )
}