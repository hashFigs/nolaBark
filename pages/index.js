import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"

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
  
    if (session) {
    
      return(
      <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <h1>user authenticated</h1>
      <h1>{user.email}</h1>  
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt=""
      />
      <h1 className={utilStyles.heading2Xl}>{"jordi"}</h1>
   
      
  

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
      )
    }
    return(
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      
      <h1>user no authenticated</h1>
       
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt=""
      />
      <h1 className={utilStyles.heading2Xl}>{"jordi"}</h1>
   
      
      <section className={utilStyles.headingMd}>
        <p>hi my name is jooo</p>
       
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}