import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import Image from 'next/image';


export default function Post({postData}) {
  const Imagepath = `/images/${postData.image}`
  return <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
     
          <div className="container mx-auto ">  
                 
                  <div className="p-20">
                      <Image
                          priority
                          className={"p-10  float-left" }
                          src={Imagepath}
                          height="500"
                          width="500"
                          alt=""
                      />        
                      
                      <h1 className="text-4xl">{postData.title}</h1>
                      <Date dateString={postData.date} />
                                     
                      <div className="space-y-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                      
                  </div>
              </div>
          
              
                    
     




     
     
  </Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }