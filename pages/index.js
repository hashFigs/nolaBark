import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Services from '../components/home/servicesBanner';
import Tracking from '../components/home/tracking';
import BlogGallery from '../components/blog/blogGallery';
import NewsLetter from '../components/newsLetter';
import MailChimp from '../components/mailchimp';

import { getSortedPostsData } from '../lib/posts';
import { useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import MainBanner from '../components/mainBanner';
import HomeBanner from '../components/homeBanner';

import * as ga from '../lib/ga'

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
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }



  return(
      <>
     
    <Layout >

        <Head>
          <title>{siteTitle}</title>
        </Head>

        <HomeBanner
            title = {"New Orleans Best Pet Care"}
            image = {"main-Banner.jpg"}
            height = {"60"}
            anchor = {"top"}
        />      
        
        <Services />
        <Tracking />
        <BlogGallery posts={allPostsData}/>
        <MailChimp/>
      
      </Layout>
    </>
  )
}