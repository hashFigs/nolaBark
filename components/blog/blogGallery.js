import Image from "next/image"
import Link from "next/link"
import utilStyles from '../../styles/utils.module.css';



export default function BlogGallery ({posts}) {

    return(
        <>
         
         <div class="container xl:w-full w-11/12 mx-auto pt-0.5 overflow-y-hidden ">
                    <div class="w-full">
                        <h1 class="xl:text-5xl lg:text-5xl text-3xl sm:text-left text-center text-gray-800 dark:text-white  font-extrabold sm:w-4/6 w-5/6 mx-auto sm:mx-0">Wow Blog</h1>
                    </div>

                    <div class="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-3 ">
                    
                    {posts.map(({ id, date, title, image }) => (
                            <>
                         
                         <Link href={`/posts/${id}`}>
                         <div class=" border-b border-gray-300 dark:border-gray-700 p-2">
                            <div class="w-full rounded h-56">
                                
                                <Image
                                    priority
                                    className={"object-cover h-full w-full overflow-hidden rounded shadow"}
                                    src={`/images/${image}`}
                                    height={"400"}
                                    width={"400"}
                                    alt=""
                                />  
                            </div>
                            
                            <div class="flex w-full items-center justify-between pt-6 pb-1 ">
                                <p class="text-2xl font-extrabold  text-gray-900 dark:text-white ">{title}</p>
                                
                            </div>
                            <p class="text-base text-gray-600 dark:text-gray-200 pb-3">{date}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">The Vice President, Operations is responsible for planning, directing, and overseeing finance and operations activities in the organization, and ensuring development.</p>
                        </div>  
                        </Link>

                        </>
                        ))}       
                        </div>
                    </div>

        </>
       
    )
}