import { render } from "react-dom";
import Layout from "../components/layout";
import MainBanner from "../components/mainBanner";
import DogWalking from "../components/services/dog-walking";
import Benefits from "../components/services/benefits";
export default function DogWalkings() {

    return(
        <>

       
        <Layout home>
        <MainBanner 
            title = {" Trust your pet with the best"}
            image = {"collie.jpg"}
            height = {"60"}
            anchor = {"top"}
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
        ]} />
       

    </Layout>
        </>
    )
}