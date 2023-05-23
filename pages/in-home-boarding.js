import Layout, { siteTitle } from "../components/layout";
import styles from '../components/layout.module.css';
import AboutUs from '../components/about/aboutus.js';
import MainBanner from "../components/mainBanner";
import LayoutImgTxt from "../components/layoutImgTxt";
import Head from "next/head";

export default function About({ allPostsData }) {
    
const siteTitle = 'In home boarding | Treme Tails'

return(
    <>
    <Layout home>
     <Head>
            <title>{siteTitle}</title>
     </Head>
        <MainBanner 
            title = {" IN-HOME SLEEPOVER & BOARDING "}
            image = {"back-walking.jpg"}
            height = {"60"}
            anchor = {"top"}
        />     
       
        
        <LayoutImgTxt
            title = {"SLEEPOVER"}
            description = { "We stay at YOUR house Sleepovers are perfect for households with: multiple animals (dogs, cats, rabbits....) pups who have any type of anxiety mail/package pick-up and plant care "}
            image = {"back-walking.jpg"}
            imgside = {"right"}
            linkText = {"Starting at $115/night"}
            linkUrl = {'/contact'}
       />

<LayoutImgTxt
            title = {"BOARDING"}
            description = { "Pup stays at OUR house Boardings are perfect for: Pups who like adventure, Pups who like people, Pups who like other pups"}
            image = {"back-walking.jpg"}
            imgside = {"left"}
            linkText = {"Starting at $130/night"}
            linkUrl = {'/contact'}
       />



    </Layout>
    </>
)
}