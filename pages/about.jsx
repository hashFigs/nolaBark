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
            image = {"onbridge.jpg"}
            height = {"60"}
            anchor = {"top"}
            withSvg = { "1" }
        />     
        <AboutUs/>
        
        <div className={styles.container}>    
       
        </div>
    </Layout>
    </>
)
}