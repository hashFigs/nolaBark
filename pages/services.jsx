import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import DogWalking from "../components/services/dog-walking";
import MainBanner from "../components/mainBanner";
import Image from "next/image";

export default function Services({ allPostsData }) {
  return (
    <>
      
      <Layout home> 
        <MainBanner 
            title = {"SAFE. TRUSTED. LOCAL"}
            image = {"wet_mouse.jpg"}
        />      
        <DogWalking />
        
      </Layout>
    </>
  );
}
