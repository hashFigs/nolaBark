import Layout from "../components/layout"
import styles from '../components/layout.module.css';
import AboutUs from '../components/about/aboutus.js'

export default function About({ allPostsData }) {
return(
    <>
    <Layout home>
        <AboutUs/>
        
        <div className={styles.container}>    
       
        </div>
    </Layout>
    </>
)
}