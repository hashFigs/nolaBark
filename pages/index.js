import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Services from '../components/home/servicesBanner';
import Tracking from '../components/home/tracking';
import BlogGallery from '../components/blog/blogGallery';
import MailChimp from '../components/mailchimp';
import { useRouter } from 'next/router'


import { getSortedPostsData } from '../lib/posts';
import { useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
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
  const router = useRouter()
  const { data: session } = useSession()
  const user = session?.user;
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])



  return(
      <>
     
    <Layout >

        <Head>
          <title>{siteTitle}</title>
          <meta
          name="description"
          content="Pet care and Dog walking Services in New Orleans"
          />
          <meta name="keywords" content="dog walking, New Orleans, pet services, walking the dog, walk in new orleans, 7 ward, bayou st john, marigny, bywater  "/>
          <link rel="canonical" href="https://tremetails.com" />
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