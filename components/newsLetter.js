import Image from "next/image"
export default function NewsLetter(){

    return(
        <>


<div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
  <div class="relative w-full max-w-lg">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div class="m-8 relative space-y-4">
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="flex-1">
          <div class="h-4 w-48 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="flex-1">
          <div class="h-4 w-56 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="flex-1">
          <div class="h-4 w-44 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
        </div>
      </div>
    </div>
  </div>
</div>
         <div class=" p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
            <div class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                <Image 
                  class="h-full xl:w-full lg:w-1/2 w-full"
                  alt ="dog high5"
                  src = "/images/high5.jpg"
                  width={5000}
                  height = {500}/>
                  
            </div>
            <div class="w-full xl:w-1/2 xl:pl-40 xl:py-28 " >
                <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 dark:text-white mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                <p class="text-base leading-normal text-gray-600 dark:text-gray-200 text-center xl:text-left">Whether article spirits new her covered hastily sitting her. Money witty books nor son add.</p>
                <div class="flex items-stretch mt-12">
                    <input class="bg-gray-100 rounded-lg rounded-r-none dark:bg-gray-800 text-base leading-none text-gray-800 dark:text-white p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                    <button class="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                </div>
            </div>
        </div>
    
        </>
    )
}