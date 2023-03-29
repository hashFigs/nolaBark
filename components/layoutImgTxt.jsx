import Image from "next/image";
import Link from "next/link";

export default function LayoutImgTxt ({title, description, image, height, width, imgside, background, linkText, linkUrl}){

    const imagePath = `/images/${image}`
    const imageClass = ''
    const imgHeight = height || 300
    const imgWidth = width || 400
    const imgBackground = background || 'white'
    const linkTextIn = linkText || null
    const linkUrlIn = linkUrl || '/login'

      


    if(imgside === 'left'){
        return(
            <>
              
        
  
                <div class="container mx-auto ">  
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                        
                        <div class="flex justify-center p-20 text-6xl">
                            <Image
                                priority
                                className={imageClass}
                                src={imagePath}
                                height={imgHeight}
                                width={imgWidth}
                                alt=""
                            />          
                        </div>

                        <div class="p-20">
                            <h1 className="text-4xl">{title}</h1>
                            <p className=" texk-l py-6">{description}</p>
                            
                            {
                                linkTextIn===null ? 
                                <p> </p>:
                                <Link href={linkUrlIn} ><p>{linkTextIn}</p></Link>
                            } 
                        </div>
                    </div>
                </div>
                  </>
                    );
    }
    else if(imgside === 'right'){

        return(
            <>
            
                <div class="container mx-auto ">  
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                        
                       
                        <div class="p-20">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            {
                                linkTextIn===null ? 
                                <p> </p>:
                                <Link href={linkUrlIn} ><p>{linkTextIn}</p></Link>
                            } 
                        </div>

                        <div class="flex justify-center p-20 text-6xl">
                            
                            <Image
                                priority
                                className={imageClass}
                                src={imagePath}
                                height={imgHeight}
                                width={imgWidth}
                                alt=""
                            />          
                        </div>
                    </div>
                </div>
                  </>
                    );
    
    
    }    




}