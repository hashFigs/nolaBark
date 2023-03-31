import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Services from '../components/home/servicesBanner';
import Tracking from '../components/home/tracking';
import Blog from '../components/home/blog';
import NewsLetter from '../components/newsLetter';

import { getSortedPostsData } from '../lib/posts';

import { useSession, signIn, signOut } from "next-auth/react"
import MainBanner from '../components/mainBanner';
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

        <MainBanner
            title = {"New Orleans Best Pet Care"}
            image = {"main.jpg"}
            height = {"60"}
            anchor = {"top"}
        />      
        

       
        
        <Services />
        
        <Tracking />
        
        <Blog />
        <NewsLetter/>
       
      
      </Layout>
    </>
  )
}