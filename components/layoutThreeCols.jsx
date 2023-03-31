import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function LayoutThreeCols ({title1, title2, title3, 
                                       description1, description2,description3,
                                        image1, image2, image3, 
                                        height, width,
                                        linkText1, linkText2, linkText3,
                                        linkUrl1, linkUrl2, linkUrl3}){

    const imagePath1 = `/images/${image1}`
    const imagePath2 = `/images/${image1}`
    const imagePath3 = `/images/${image1}`
    const imageClass = ''
    const imgHeight = height || 300
    const imgWidth = width || 400
    const linkTextIn1 = linkText1 || null
    const linkTextIn2 = linkText2 || null
    const linkTextIn3 = linkText3 || null
    const linkUrlIn1 = linkUrl1 || '/login'
    const linkUrlIn2 = linkUrl2 || '/login'
    const linkUrlIn3 = linkUrl3 || '/login'
      
        return(
            <>
                <div class="container mx-auto ">  
                    <div class="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-3">
                        
                        <div class=" justify-center p-10">
                            <Image
                                priority
                                className={imageClass}
                                src={imagePath1}
                                height={imgHeight}
                                width={imgWidth}
                                alt=""
                            />          
                        
                            <h1 className="text-2xl">{title1}</h1>
                            <p className=" text-l py-6">{description1}</p>
                            
                            {
                                linkTextIn1===null ? 
                                <p> </p>:
                                <Link href={linkUrlIn1} >
                                <button className="px-8 mt-8 py-1 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                                    {linkTextIn1}
                                </button>
                            </Link>
                            } 

                        </div>

                        <div class=" justify-center p-10">
                            <Image
                                priority
                                className={imageClass}
                                src={imagePath2}
                                height={imgHeight}
                                width={imgWidth}
                                alt=""
                            />          
                        
                            <h1 className="text-2xl">{title2}</h1>
                            <p className=" text-l py-6">{description2}</p>
                            
                            {
                                linkTextIn2===null ? 
                                <p> </p>:
                                <Link href={linkUrlIn2} >
                                <button className="px-8 mt-8 py-1 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                                    {linkTextIn2}
                                </button>
                            </Link>
                            } 

                        </div>

                        <div class=" justify-center p-10">
                            <Image
                                priority
                                className={imageClass}
                                src={imagePath3}
                                height={imgHeight}
                                width={imgWidth}
                                alt=""
                            />          
                        
                            <h1 className="text-2xl">{title3}</h1>
                            <p className=" text-l py-6">{description3}</p>
                            
                            {
                                linkTextIn3===null ? 
                                <p> </p>:
                                <Link href={linkUrlIn3} >
                                <button className="px-8 mt-8 py-1 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                                    {linkTextIn3}
                                </button>
                            </Link>
                            } 

                        </div>

                    </div>
                </div>
                  </>
                    );
    }
    
