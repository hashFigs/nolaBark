import Layout from "../components/layout"
import { getSortedPostsData } from "../lib/posts";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import styles from '../components/layout.module.css';



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
    <div className={styles.container}>   
  
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Blog</h1>
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
    </div>
    </Layout>
    </>
)
}