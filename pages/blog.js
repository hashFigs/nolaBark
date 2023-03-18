import Layout from "../components/layout"
import { getSortedPostsData } from "../lib/posts";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";



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
    <h1> this is the blog page and evryone can see it </h1>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <p>{date}</p>
            <br />
          
          </li>
          ))}
        </ul>
      </section>
    
    </Layout>
    </>
)
}