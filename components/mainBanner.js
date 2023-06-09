import Image from 'next/image'

export default function MainBanner({image, title, height, anchor, withSvg}) {

  //transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0
  const imagePath = `/images/${image}`
  const imageClass = `h-80 w-full object-cover object-${anchor} `
    return(
        <div className="relative">
            <Image
            priority
            className={imageClass}
            src={imagePath}
            height={500}
            width={1000}
            alt=""
            />
            
            <h1 className="absolute text-4xl sm:text-5xl text-gray-900 top-1/2 left-1/3 -translate-x-1/3 -translate-y-1/2 font-extrabold text-center text-white">
                {title}
            </h1>
            
            {withSvg ==="1" && 
            <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#ffffff" fill-opacity="1" d="M0,96L720,224L1440,160L1440,320L720,320L0,320Z"></path>
            </svg>
            }

            {withSvg ==="2" && 
            <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                <path fill="#ffffff" fill-opacity="1" d="M0,96L720,192L1440,128L1440,320L720,320L0,320Z"></path>
            </svg>
            }
        </div>
)
}