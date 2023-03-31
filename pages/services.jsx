import Layout from "../components/layout";
import DogWalking from "../components/services/dog-walking";
import MainBanner from "../components/mainBanner";
import Benefits from "../components/services/benefits";
import ServicesBanner from "../components/home/servicesBanner";

export default function Services({ allPostsData }) {
  return (
    <>
      
      <Layout home> 
        <MainBanner 
            title = {"SAFE. TRUSTED. LOCAL"}
            image = {"wet_mouse.jpg"}
            height = {"60"}
            anchor = {"bottom"}
        />      


        <ServicesBanner />

        
        
      </Layout>
    </>
  );
}
