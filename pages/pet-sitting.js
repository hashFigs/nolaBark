import { render } from "react-dom";
import Layout from "../components/layout";
import MainBanner from "../components/mainBanner";

export default function PetSitting() {

    return(
        <>
    <Layout home>
        <MainBanner 
            title = {" HOME CARE FOR CRITTERS"}
            image = {"back-walking.jpg"}
            height = {"60"}
            anchor = {"top"}
        />     
        
        
    </Layout>
        </>
    )
}