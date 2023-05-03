import { render } from "react-dom";
import Layout from "../components/layout";
import MainBanner from "../components/mainBanner";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import dynamic from 'next/dynamic'
import ServicesMap from "../components/services-map";

const DynamicMap = dynamic(() => import('../components/services-map'), {
    ssr: false,
  })

export default function ServicesArea() {

    return(
        <>
    <Layout home>
        <MainBanner 
            title = {" HOME CARE FOR CRITTERS"}
            image = {"back-walking.jpg"}
            height = {"60"}
            anchor = {"top"}
            withSvg = {"2"}
        />    

    
        
    <DynamicMap />
    </Layout>
        </>
    )
}