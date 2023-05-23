import Layout from "../components/layout";

import MainBanner from "../components/mainBanner";
import Head from "next/head";
import ServicesBanner from "../components/home/servicesBanner";

export default function Services({ allPostsData }) {
  const siteTitle = 'Services | tremetails.com';
  return (
    <>
      
      <Layout home> 
      <Head>
          <title>{siteTitle}</title>
      </Head>
        <MainBanner 
            title = {"SAFE. TRUSTED. LOCAL"}
            image = {"wet_mouse.jpg"}
            height = {"60"}
            anchor = {"bottom"}
            withSvg = {false}
        />      


        <ServicesBanner />

        
        
      </Layout>
    </>
  );
}
