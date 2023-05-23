import Head from 'next/head';
import Navbar from './nav2';
import Footer from './footer';

const name = 'Jordi figue';
export const siteTitle = 'Treme Tails - dog walking in New Orleans';

export default function Layout({ children, home }) {
  return (
    <>
    <Navbar></Navbar>
      <Head>
    
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        <link rel="icon" href="/cattle.ico" />
      
        
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
      

      <main>{children}</main> 
       
     
    <Footer></Footer>
    </>
  );
}

