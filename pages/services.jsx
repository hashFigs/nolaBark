import Layout from "../components/layout";
import DogWalking from "../components/services/dog-walking";
import MainBanner from "../components/mainBanner";
import Benefits from "../components/services/benefits";

export default function Services({ allPostsData }) {
  return (
    <>
      
      <Layout home> 
        <MainBanner 
            title = {"SAFE. TRUSTED. LOCAL"}
            image = {"wet_mouse.jpg"}
        />      
        <DogWalking />
        <Benefits 
            title ={"ALL WALKS INCLUDE"}
            image = {"pack.jpg"}
            description = {["Easy App-based Booking", 
                            "PUPort showing photos, GPS map, details of the walk",
                            "Back-up safety collar",
                            "Use of eco-friendly poop bags",
                            "Water refreshment",
        ]}
        />
        
      </Layout>
    </>
  );
}
