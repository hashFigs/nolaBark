import Image from 'next/image'

export default function MainBanner({image, title}) {

    const imagePath = `/images/${image}`
   console.log(imagePath)
    return(
        <div class="relative">
            <Image
            priority
            className='h-64 w-full object-cover object-bottom'
            src={imagePath}
            height={144}
            width={1400}
            alt=""
            />
            
            <h1 class="absolute text-5xl text-gray-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                {title}
            </h1>
        </div>
)
}