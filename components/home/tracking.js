import Image from "next/image"
export default function Tracking () {

    return(
        <>

         
<div class="bg-gray-50  flex items-center justify-center px-16">
  <div class="relative w-full max-w-full">
    <div class="absolute top-30 -left-0 w-56 h-56 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute -bottom-8 left-20 w-52 h-52 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
  
    <div class="m-1 relative space-y-4">
     
    <h2 className= "z-1000 text-3xl py-12 font-semibold"> {"Showcasing animals with fur, feathers, scales, and beyond!".toUpperCase()}</h2>
    <p class="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">No matter where you are in New Orleans, we&apos; re ready to assist you and your furry friend. Join our Nola Barker community and enjoy the convenience of booking pet care services through our app, complete with GPS tracking for dog walks, in-home boarding, pet sitting, and other award-winning, peace-of-mind-giving services. </p>
         
   
      
    </div>
  </div>
</div>
        




        <div className="bg-gray-50">
         <div className="container mx-auto text-center pt-0.5">
       
         
         <div class="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-3 py-10">
                <div class="justify-center p-6 ">
                <Image
                    priority
                    className='rounded-xl h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]
                    '
                    src={"/images/tracking.jpg"}
                    height={144}
                    width={800}
                    alt="tracking"
                />
                    <h2 className=" py-5 text-2xl font-semibold">GPS TRACKING</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">As a New Orleans Barker you are always in the know! With our GPS tracking system you will know when and where your pup is walked…. Peace of Mind to even the most helicopter fur-parent.</p>
                </div>

                <div class="justify-center p-6" >
                <Image
                    priority
                    className='rounded-xl h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]'
                    src={"/images/booking.jpg"}
                    height={144}
                    width={800}
                    alt="booking"
                />
                    <h2 className ="py-5 text-2xl font-semibold"> APP BOOKING</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">It’s so easy.  You request care directly from your smartphone through a very user-friendly app.  You are billed automatically so one less thing to keep track of. The only way we could make it easier is if we could read minds.</p>
                </div>
                
                <div  class="justify-center p-6 ">
                <Image
                    priority
                    className='z-50 rounded-xl h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]
                    '
                    src={"/images/sunglasses.jpg"}
                    height={144}
                    width={800}
                    alt="dog-sunglasses"
                />
                    <h2 className ="py-5 text-2xl font-semibold">DIGITAL UPDATES WITH PHOTOS</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">You are always in the loop. Since you can’t physically be there, you can be there digitally. You’ll always know where your pup is from the automatic “care has started” email through the GPS-tracked map of the walk, time-stamped details, and lots of great walk photos.  </p>

                </div>
                </div>
                </div>
                </div>


        </>
    )
}
