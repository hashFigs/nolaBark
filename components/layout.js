import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './nav2';
import Footer from './footer';
import MainBanner from './home/mainBanner';

const name = 'Jordi figue';
export const siteTitle = 'personal portafolio';

export default function Layout({ children, home }) {
  return (
    <>
    <Navbar></Navbar>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Pet care and Dog walking Services in New Orleans"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      

      <main>{children}</main> 
     
    <Footer></Footer>
    </>
  );
}