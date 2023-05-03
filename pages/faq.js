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
            image = {"back-walking.jpg"}
            height = {"60"}
            anchor = {"top"}
        />     
        
   
       <h1>FAQ</h1>
       

    </Layout>
        </>
    )
}