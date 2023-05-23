import Layout from "../components/layout";
import styles from '../components/layout.module.css';
import AboutUs from '../components/about/aboutus.js';
import MainBanner from "../components/mainBanner";
import Head from "next/head";

export default function About({ allPostsData }) {

    const siteTitle = 'About Us | tremetails.com';
    return(
    <>
    <Layout home>
    <Head>
          <title>{siteTitle}</title>
          <meta name="keywords" content="trusted pet services, trust dog walking, new orleans, boarding dogs, dog services "/>

    </Head>

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