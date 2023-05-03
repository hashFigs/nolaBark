import Layout from '../components/layout';
import MainBanner from '../components/mainBanner';
import dynamic from 'next/dynamic'
import 'mapbox-gl/dist/mapbox-gl.css';

const DynamicMap = dynamic(() => import('../components/services-map'), {
    ssr: false,
  })

export default function ServicesArea() {

    return(
        <> 
        <Layout home>
        <MainBanner 
            title = {" Service Area"}
            image = {"back-walking.jpg"}
            height = {"60"}
            anchor = {"top"}
        />    
         <DynamicMap />
         </Layout>
        </>
    )
}