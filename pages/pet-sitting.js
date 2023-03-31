import { render } from "react-dom";
import Layout from "../components/layout";
import MainBanner from "../components/mainBanner";
import LayoutImgTxt from "../components/layoutImgTxt";

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

        <LayoutImgTxt
            title = {"CAT SITS"}
            description = { "We offer 30 & 45-minute in-home cat sitting services. All visits include: App-based bookingFood change             Litter cleaning Housekeeping around the litter box Brushing (if possible) Plant watering (if requested) House check (if requested)  "}
            image = {"back-walking.jpg"}
            imgside = {"left"}
            linkText = {"Learn More"}
            linkUrl = {'/contact'}
           
       />

        <LayoutImgTxt
            title = {"CRITTER CARE"}
            description = { "We LOVE Birds, Guinea Pigs, Rabbits, Chinchillas, Lizards and more! We know that each species has a very specific care regime. Your pet is special, deserving of the customized care that is special to their needs. You get Peace of Mind as we have studied the specific needs of all our critters and will design a customized care plan for your pet no matter if they have fur, feathers or scales."}
            image = {"back-walking.jpg"}
            imgside = {"right"}
            linkText = {"Learn More"}
            linkUrl = {'/contact'}
            background = {"bg-amber-600"}
       />

        <LayoutImgTxt
            title = {"HOUSE CHECK-INS"}
            description = { "Going away for a while?  You need Peace of Mind about home. We have seen it all. Have one of our insured pet sitters check in on your place to make sure your home is safe and secure.  We even make sure plants are water, fish are fed, sign for packages and take in mail. Our staff is background checked, bonded and insured.  We check in with you after each visit. We offer a variety of packages based on your needs. And you get Peace of Mind."}
            image = {"back-walking.jpg"}
            imgside = {"left"}
            linkText = {"Learn More"}
            linkUrl = {'/contact'}
       />
        
        
    </Layout>
        </>
    )
}