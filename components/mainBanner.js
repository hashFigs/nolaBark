import Image from 'next/image'

export default function MainBanner({image, title, height, anchor}) {

  //transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0
  const imagePath = `/images/${image}`
  const imageClass = `h-${height} w-full object-cover object-${anchor} `
    return(
        <div class="relative">
            <Image
            priority
            className={imageClass}
            src={imagePath}
            height={500}
            width={1000}
            alt=""
            />
            
            <h1 class="absolute text-5xl text-gray-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                {title}
            </h1>
        </div>
)
}