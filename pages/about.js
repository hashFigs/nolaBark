import Layout from "../components/layout"
import styles from '../components/layout.module.css';


export default function About({ allPostsData }) {
return(
    <>
    <Layout home>
        <div className={styles.container}>    
        <h1> this is the About page and evryone can see it </h1>
        </div>
    </Layout>
    </>
)
}