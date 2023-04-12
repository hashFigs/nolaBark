import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function LayoutImgTxt ({title, description, image, height, width, imgside, background, linkText, linkUrl}){

    /*
    const [sectionBg, setSectionBg] = useState('bg-white')

    useEffect (() => {
        if(!background){ setSectionBg('bg-white'); 
       }else{
        setSectionBg(background);   
       }
    }, [])
*/

    const imagePath = `/images/${image}`
    const imageClass = ''
    const imgHeight = height || 300
    const imgWidth = width || 400
    const linkTextIn = linkText || null
    const linkUrlIn = linkUrl || '/login'
    const sectionBg = background || 'bg-white'  
      
    if(imgside === 'left'){
        return(
            <>
               <div className={sectionBg}>
                <div className="container mx-auto ">  
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                        
                        <div className="flex justify-center p-20 text-6xl">
                            <Image
                                priority
                                className={imageClass}
                                src={imagePath}
                                height={imgHeight}
                                width={imgWidth}
                                alt=""
                            />          
                        </div>

                        <div className="p-20">
                            <h1 className="text-3xl font-extrabold">{title}</h1>
                            <p className=" texk-l py-6 text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">{description}</p>
                                          
                            {
                                linkTextIn===null ? 
                                <p> </p>:
                                <Link href={linkUrlIn} >
                                <button className="px-8 mt-8 py-1 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                                    {linkTextIn}
                                </button>
                            </Link>
                            } 
                        </div>
                    </div>
                </div>
                </div>
                  </>
                    );
    }
    else if(imgside === 'right'){

        return(
            <>
                <div className={sectionBg}>
                <div className="container mx-auto ">  
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                        
                       
                        <div className="p-20">
                        <h1 className="text-3xl font-extrabold">{title}</h1>
                        <p className=" texk-l py-6 text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">{description}</p>
                            
                            {
                                linkTextIn===null ? 
                                <p> </p>:
                                <Link href={linkUrlIn} >
                                <button className="px-8 mt-8 py-1 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                                    {linkTextIn}
                                </button>
                            </Link>
                            } 
                        </div>

                        <div className="flex justify-center p-20 text-6xl">
                            
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
                </div>
                  </>
                    );
    
    
    }    




}