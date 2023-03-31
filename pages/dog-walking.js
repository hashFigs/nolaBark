import { render } from "react-dom";
import Layout from "../components/layout";
import MainBanner from "../components/mainBanner";
import LayoutImgTxt from "../components/layoutImgTxt";
import DogWalking from "../components/services/dog-walking";

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
        
       <DogWalking />
       
       <LayoutImgTxt
            title = {"Dog Walking"}
            description = { "sdklfjflksj"}
            image = {"back-walking.jpg"}
            imgside = {"left"}
            linkText = {"Learn More"}
            linkUrl = {'/contact'}
            
       />
       

    </Layout>
        </>
    )
}