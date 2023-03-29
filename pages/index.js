import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Services from '../components/home/services';
import Tracking from '../components/home/tracking';
import Blog from '../components/home/blog';
import Socials from '../components/home/socials';

import { getSortedPostsData } from '../lib/posts';

import { useSession, signIn, signOut } from "next-auth/react"
import MainBanner from '../components/home/mainBanner';
import MainBanner2 from '../components/mainBanner';
import Testimonials from '../components/home/testimonials';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  const { data: session } = useSession()
  const user = session?.user;
  console.log(session)
  
  
  return(
      <>
     
    <Layout >

        <Head>
          <title>{siteTitle}</title>
        </Head>

        <MainBanner2
            title = {"New Orleans Best Pet Care"}
            image = {"main.jpg"}
            height = {"80"}
            topmargin = {"top"}
        />      
        

       
        
        <Services />
        
        <Tracking />
        
        <Blog />
        <Testimonials />
        <Socials />

      
      </Layout>
    </>
  )
}