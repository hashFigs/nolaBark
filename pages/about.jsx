import Layout from "../components/layout";
import styles from '../components/layout.module.css';
import AboutUs from '../components/about/aboutus.js';
import MainBanner from "../components/mainBanner";

export default function About({ allPostsData }) {
return(
    <>
    <Layout home>
        <MainBanner 
            title = {"ABOUT US"}
            image = {"back-walking.jpg"}
            height = {"60"}
            anchor = {"top"}
            withSvg = { true }
        />     
        <AboutUs/>
        
        <div className={styles.container}>    
       
        </div>
    </Layout>
    </>
)
}