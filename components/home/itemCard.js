import Image from "next/image"

export default function ItemCard({title, description, price, image}) {
    const imagePath = `/images/${image}`
    
    return(
        <>
          <div tabindex="0" class=" p-4 bg-white focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
            
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
                    <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">{ description }</p>   
                               
                </div>

                <div class="flex justify-center">   

                    <button 
                      className=" px-8 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                    >LEARN MORE</button> 
                    </div>
                    </div>
            
          </div>        
        </>
    )
}