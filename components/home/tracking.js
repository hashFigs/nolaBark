import Image from "next/image"
export default function Tracking () {

    return(
        <>


         <div className="container mx-auto text-center pt-0.5">
         <h1 className= "text-3xl py-4 font-semibold"> FEATURING FUR, FEATHERS, SCALES AND MORE!</h1>
         <p class="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">If you and your pet are in North or Central Brooklyn, we’re here for you.  Become a Brooklyn Barker and get app booking, GPS-tracking on dog walks, in-home boarding, pet sitting and other award-winning, Peace of Mind giving pet care services. </p>
         
         
         <div class="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-3 py-10">
                <div class="justify-center p-6 ">
                <Image
                    priority
                    className='h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]
                    '
                    src={"/images/tracking.jpg"}
                    height={144}
                    width={800}
                    alt=""
                />
                    <h1 className=" py-5 text-2xl font-semibold">GPS TRACKING</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">As a New Orleans Barker you are always in the know! With our GPS tracking system you will know when and where your pup is walked…. Peace of Mind to even the most helicopter fur-parent.</p>
                </div>

                <div class="justify-center p-6" >
                <Image
                    priority
                    className='h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]'
                    src={"/images/booking.jpg"}
                    height={144}
                    width={800}
                    alt=""
                />
                    <h1 className ="py-5 text-2xl font-semibold"> APP BOOKING</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">It’s so easy.  You request care directly from your smartphone through a very user-friendly app.  You are billed automatically so one less thing to keep track of. The only way we could make it easier is if we could read minds.</p>
                </div>
                
                <div  class="justify-center p-6 ">
                <Image
                    priority
                    className='h-64 w-full object-cover object-bottom  transition-all duration-300 cursor-pointer  hover:grayscale-[80%]
                    '
                    src={"/images/sunglasses.jpg"}
                    height={144}
                    width={800}
                    alt=""
                />
                    <h1 className ="py-5 text-2xl font-semibold">DIGITAL UPDATES WITH PHOTOS</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">You are always in the loop. Since you can’t physically be there, you can be there digitally. You’ll always know where your pup is from the automatic “care has started” email through the GPS-tracked map of the walk, time-stamped details, and lots of great walk photos.  </p>
                </div>
                </div>
                </div>

        </>
    )
}