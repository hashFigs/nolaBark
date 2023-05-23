import Image from "next/image"
import Link from "next/link"

export default function ItemCard({title, description, price, image, link}) {
    const imagePath = `/images/${image}`
    
    return(
        <>
          <div tabIndex="0" class=" rounded-xl pb-2 bg-white focus:outline-none mx-2 w-80 xl:mb-0 mb-8 border-b border-gray-300 dark:border-gray-700">
              <div className="relative">
                <Image
                    priority
                    className='rounded-xl h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]'
                    src={imagePath}
                    height={144}
                    width={800}
                    alt=""
                />

                    <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg> 
                    </div>

            
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

