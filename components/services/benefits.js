import Image from "next/image"

export default function Benefits ({image, title, description}) {
const imagePath = `/images/${image}`
console.log("descri", description)

const listItems = description.map((item) => 
<li key={item}>
        {item}
</li>
);


    return (

 <>
        <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div class="flex justify-center p-6 text-6xl">
            <Image
                priority
                className='h-64 w-full object-cover object-bottom'
                src={imagePath}
                height={144}
                width={1400}
                alt=""
            />
          </div>

          <div class="p-6">
            <h1 className ="text-2xl font-semibold">{title}</h1>
            <ul>{listItems }</ul>   
            <button 
                      className="px-8 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                    >Book Now </button> 
          </div>
        </div>
      </div>

      <div className="benefits">
               
      </div>
    
        </>
    )
    }