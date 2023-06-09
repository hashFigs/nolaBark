import Image from 'next/image'

export default function HomeBanner({image, title, height, anchor}) {

  //transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0
  const imagePath = `/images/${image}`
  const imageClass = `h-full w-full object-cover object-${anchor} `
    return(

         <>
           
        <div className="relative">
          <Image
          priority
          className={imageClass}
          src={imagePath}
          height={500}
          width={1000}
          alt={image}
          />
        
        
          <h1 className="z-50 absolute text-4xl sm:text-7xl text-gray-900 top-1/2 left-1/3 -translate-x-1/3 -translate-y-1/2 font-extrabold text-center text-white">
              {title}
          </h1>

          <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
            <path fill="#f2be7e" fill-opacity="1" d="M0,32L14.1,42.7C28.2,53,56,75,85,106.7C112.9,139,141,181,169,176C197.6,171,226,117,254,85.3C282.4,53,311,43,339,85.3C367.1,128,395,224,424,218.7C451.8,213,480,107,508,58.7C536.5,11,565,21,593,42.7C621.2,64,649,96,678,138.7C705.9,181,734,235,762,224C790.6,213,819,139,847,106.7C875.3,75,904,85,932,128C960,171,988,245,1016,240C1044.7,235,1073,149,1101,122.7C1129.4,96,1158,128,1186,149.3C1214.1,171,1242,181,1271,181.3C1298.8,181,1327,171,1355,170.7C1383.5,171,1412,181,1426,186.7L1440,192L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path>
          </svg>
      </div>
    </> 
   
)
}

