import Layout from "../components/layout"
import { getSortedPostsData } from "../lib/posts";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import styles from '../components/layout.module.css';
import Image from 'next/image'
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
return(
    <>
    <Layout home>
      <BlogGallery
        posts={allPostsData}
        />
        
  </Layout>
    </>
)
}