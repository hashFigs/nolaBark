import Layout from "../components/layout"
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import BlogGallery from "../components/blog/blogGallery";



export async function getStaticProps() {

    const allPostsData = getSortedPostsData();
  
    return {
      props: {
        allPostsData,
      },
    };
  }
  

export default function Blog({ allPostsData }) {
  const siteTitle = 'Blog | Treme Tails';
return(
    <>
    <Layout home>
    <Head>
          <title>{siteTitle}</title>
    </Head>
      <BlogGallery
        posts={allPostsData}
        />
        
  </Layout>
    </>
)
}