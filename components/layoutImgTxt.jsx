import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function LayoutImgTxt ({title, description,  image, height, width, 
    imgside, background, linkText, linkUrl, roundedBorder, withSvg, withBgSvg }){

 
    const imagePath = `/images/${image}`
    const imageClass = roundedBorder || 'rounded-xl'
    const imgHeight = height || 300
    const imgWidth = width || 400
    const linkTextIn = linkText || null
    const linkUrlIn = linkUrl || '/login'
    const sectionBg = background || 'bg-white'  
    const roundedBorderIn = roundedBorder || 'rounded-xl'
    
    const svgColor = (sectionBg) => {
        if(sectionBg === 'bg-white'){
            return '#ffffff'
        }
        if(sectionBg === 'bg-amber-600'){
            return ' #d97706'    
        }
    }

    console.log(svgColor(sectionBg))

        if(imgside === 'left'){
        return(
            <>
                <div class = "relative"> 
               <div className={sectionBg}>
                <div className="container mx-auto ">  
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                        
                        <div className="flex justify-center p-20 text-6xl">
                           <div class = "relative"> 
                            <Image
                                priority
                                className={imageClass}
                                src={imagePath}
                                height={imgHeight}
                                width={imgWidth}
                                alt={image}
                            /> 

                            {withSvg == "1" &&
                            <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                              <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,96L720,224L1440,160L1440,320L720,320L0,320Z"></path>
                            </svg>
                            }

                             {withSvg == "2" &&
                              <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                              <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,64L16,96C32,128,64,192,96,213.3C128,235,160,213,192,181.3C224,149,256,107,288,90.7C320,75,352,85,384,106.7C416,128,448,160,480,149.3C512,139,544,85,576,58.7C608,32,640,32,672,53.3C704,75,736,117,768,133.3C800,149,832,139,864,165.3C896,192,928,256,960,261.3C992,267,1024,213,1056,176C1088,139,1120,117,1152,106.7C1184,96,1216,96,1248,106.7C1280,117,1312,139,1344,160C1376,181,1408,203,1424,213.3L1440,224L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
                            </svg>
                            } 
                            {withSvg == "3" &&
                            <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,160L10.4,176C20.9,192,42,224,63,240C83.5,256,104,256,125,229.3C146.1,203,167,149,188,138.7C208.7,128,230,160,250,192C271.3,224,292,256,313,272C333.9,288,355,288,376,272C396.5,256,417,224,438,213.3C459.1,203,480,213,501,218.7C521.7,224,543,224,563,229.3C584.3,235,605,245,626,250.7C647,256,668,256,689,261.3C709.6,267,730,277,751,272C772.2,267,793,245,814,218.7C834.8,192,856,160,877,170.7C897.4,181,918,235,939,245.3C960,256,981,224,1002,192C1022.6,160,1043,128,1064,138.7C1085.2,149,1106,203,1127,240C1147.8,277,1169,299,1190,272C1210.4,245,1231,171,1252,149.3C1273,128,1294,160,1315,154.7C1335.7,149,1357,107,1377,85.3C1398.3,64,1419,64,1430,64L1440,64L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"></path>
                            </svg>
                            }
                            {withSvg == "4" &&
                            <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,288L1440,96L1440,320L0,320Z"></path>
                            </svg>
                            }
                           
                           </div>
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
                {withBgSvg == "1" &&
                <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,96L720,224L1440,160L1440,320L720,320L0,320Z"></path>
                </svg>
                }

                {withBgSvg == "2" &&
                    <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,64L16,96C32,128,64,192,96,213.3C128,235,160,213,192,181.3C224,149,256,107,288,90.7C320,75,352,85,384,106.7C416,128,448,160,480,149.3C512,139,544,85,576,58.7C608,32,640,32,672,53.3C704,75,736,117,768,133.3C800,149,832,139,864,165.3C896,192,928,256,960,261.3C992,267,1024,213,1056,176C1088,139,1120,117,1152,106.7C1184,96,1216,96,1248,106.7C1280,117,1312,139,1344,160C1376,181,1408,203,1424,213.3L1440,224L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
                </svg>
                } 
                {withBgSvg == "3" &&
                        <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                            <path fill="#ffffff" fill-opacity="1" d="M0,160L10.4,176C20.9,192,42,224,63,240C83.5,256,104,256,125,229.3C146.1,203,167,149,188,138.7C208.7,128,230,160,250,192C271.3,224,292,256,313,272C333.9,288,355,288,376,272C396.5,256,417,224,438,213.3C459.1,203,480,213,501,218.7C521.7,224,543,224,563,229.3C584.3,235,605,245,626,250.7C647,256,668,256,689,261.3C709.6,267,730,277,751,272C772.2,267,793,245,814,218.7C834.8,192,856,160,877,170.7C897.4,181,918,235,939,245.3C960,256,981,224,1002,192C1022.6,160,1043,128,1064,138.7C1085.2,149,1106,203,1127,240C1147.8,277,1169,299,1190,272C1210.4,245,1231,171,1252,149.3C1273,128,1294,160,1315,154.7C1335.7,149,1357,107,1377,85.3C1398.3,64,1419,64,1430,64L1440,64L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"></path>
                        </svg>
                }
                {withBgSvg == "4" &&
                <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ff5500" fill-opacity="1" d="M0,288L1440,96L1440,320L0,320Z"></path>
                </svg>
                }
                </div>
                  </>
                    );
    }
    else if(imgside === 'right'){

        return(
            <>
               <div class = "relative">
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
                            <div class="relative">
                            <Image
                                priority
                                className={imageClass}
                                src={imagePath}
                                height={imgHeight}
                                width={imgWidth}
                                alt=""
                            />       

                            {withSvg == "1" &&
                            <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                              <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,96L720,224L1440,160L1440,320L720,320L0,320Z"></path>
                            </svg>
                            }

                             {withSvg == "2" &&
                              <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                              <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,64L16,96C32,128,64,192,96,213.3C128,235,160,213,192,181.3C224,149,256,107,288,90.7C320,75,352,85,384,106.7C416,128,448,160,480,149.3C512,139,544,85,576,58.7C608,32,640,32,672,53.3C704,75,736,117,768,133.3C800,149,832,139,864,165.3C896,192,928,256,960,261.3C992,267,1024,213,1056,176C1088,139,1120,117,1152,106.7C1184,96,1216,96,1248,106.7C1280,117,1312,139,1344,160C1376,181,1408,203,1424,213.3L1440,224L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
                            </svg>
                            } 
                            {withSvg == "3" &&
                            <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,160L10.4,176C20.9,192,42,224,63,240C83.5,256,104,256,125,229.3C146.1,203,167,149,188,138.7C208.7,128,230,160,250,192C271.3,224,292,256,313,272C333.9,288,355,288,376,272C396.5,256,417,224,438,213.3C459.1,203,480,213,501,218.7C521.7,224,543,224,563,229.3C584.3,235,605,245,626,250.7C647,256,668,256,689,261.3C709.6,267,730,277,751,272C772.2,267,793,245,814,218.7C834.8,192,856,160,877,170.7C897.4,181,918,235,939,245.3C960,256,981,224,1002,192C1022.6,160,1043,128,1064,138.7C1085.2,149,1106,203,1127,240C1147.8,277,1169,299,1190,272C1210.4,245,1231,171,1252,149.3C1273,128,1294,160,1315,154.7C1335.7,149,1357,107,1377,85.3C1398.3,64,1419,64,1430,64L1440,64L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"></path>
                            </svg>
                            }
                            {withSvg == "4" &&
                            <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,288L1440,96L1440,320L0,320Z"></path>
                            </svg>
                            }
                            </div>   
                        </div>
                    </div>
                </div>
                </div>

                {withBgSvg == "1" &&
                <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,96L720,224L1440,160L1440,320L720,320L0,320Z"></path>
                </svg>
                }

                {withBgSvg == "2" &&
                    <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={svgColor(sectionBg)} fill-opacity="1" d="M0,64L16,96C32,128,64,192,96,213.3C128,235,160,213,192,181.3C224,149,256,107,288,90.7C320,75,352,85,384,106.7C416,128,448,160,480,149.3C512,139,544,85,576,58.7C608,32,640,32,672,53.3C704,75,736,117,768,133.3C800,149,832,139,864,165.3C896,192,928,256,960,261.3C992,267,1024,213,1056,176C1088,139,1120,117,1152,106.7C1184,96,1216,96,1248,106.7C1280,117,1312,139,1344,160C1376,181,1408,203,1424,213.3L1440,224L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
                </svg>
                } 
                {withBgSvg == "3" &&
                        <svg class="absolute bottom-0 left-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                            <path fill="#ffffff" fill-opacity="1" d="M0,160L10.4,176C20.9,192,42,224,63,240C83.5,256,104,256,125,229.3C146.1,203,167,149,188,138.7C208.7,128,230,160,250,192C271.3,224,292,256,313,272C333.9,288,355,288,376,272C396.5,256,417,224,438,213.3C459.1,203,480,213,501,218.7C521.7,224,543,224,563,229.3C584.3,235,605,245,626,250.7C647,256,668,256,689,261.3C709.6,267,730,277,751,272C772.2,267,793,245,814,218.7C834.8,192,856,160,877,170.7C897.4,181,918,235,939,245.3C960,256,981,224,1002,192C1022.6,160,1043,128,1064,138.7C1085.2,149,1106,203,1127,240C1147.8,277,1169,299,1190,272C1210.4,245,1231,171,1252,149.3C1273,128,1294,160,1315,154.7C1335.7,149,1357,107,1377,85.3C1398.3,64,1419,64,1430,64L1440,64L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"></path>
                        </svg>
                }
                </div>
                  </>
                    );
    
    
    }    




}