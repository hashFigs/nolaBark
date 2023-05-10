import Layout from "../components/layout";
import MainBanner from "../components/mainBanner";
import LayoutImgTxt from "../components/layoutImgTxt";
import LayoutThreeCols from "../components/layoutThreeCols";

export default function HouseCheckIns({ allPostsData }) {
return(
    <>
    <Layout home>
        <MainBanner 
            title = {"House check-ins"}
            image = {"house1.jpg"}
            height = {"60"}
            anchor = {"top"}
        />     
       
        
       <LayoutImgTxt
            title = {"HOUSE CHECK-INS"}
            description = { "Going away for a while?  You need Peace of Mind about home. We have seen it all. Have one of our insured pet sitters check in on your place to make sure your home is safe and secure.  We even make sure plants are water, fish are fed, sign for packages and take in mail. Our staff is background checked, bonded and insured.  We check in with you after each visit. We offer a variety of packages based on your needs. And you get Peace of Mind."}
            image = {"house2.jpg"}
            imgside = {"left"}
            linkText = {"Starting at $130/night"}
            linkUrl = {'/contact'}
       />
         <div class="justify-center p-5">
         <h1 className="text-center text-3xl py-10"> 3 options to choose from to meet your home needs:</h1>

         </div>
        <LayoutThreeCols
            title1 = {"Quick"}
            title2 = {" Detailed"}
            title3 = {"Extensive"}
            description1 = { "You live in a studio or one bedroom apartment. You have 5 or less house plants that require the most basic care - using a cup to water them. It should take our Care Associates 20 minutes or less to complete your plant care, security check, and bringing in mail/packages."}
            description2 = { "You live in 700sq ft or more apartment. You have more than five plants that would require the CA use other methods than a cup to water your plants. Your plants may even have special requests. It should take our CA between 30 and 20 minutes to diligently complete your plant care, security check, and bring in mail/packages, or take out trash"}
            description3 = { " Extensive You live in a multi level apartment or house that may also have an outdoor space. You have 11 or more plants, some or all may have detailed instructions or require different methods of watering (self watering systems, aerogardens, humidifiers, etc.) or fertilizing. Our care associate between 30 to 40 minutes to diligently care for your plants, bring in mail, take out trash, and complete a security check. Note: We do encourage that you tip your assigned care associate (or offer plant cuttings!) since we do our best to assign associates that are our most knowledgeable in gardening"}
            image1 = {"house3.jpg"}
            image2 = {"house1.jpg"}
            image3 = {"house2.jpg"}
            imgside = {"left"}
            linkText1 = {"Book Now $27"}
            linkText2 = {"Book Now $35.50"}
            linkText3 = {"Book Now $42.50"}
            linkUrl1 = {'/contact'}
            linkUrl2 = {'/contact'}
            linkUrl3 = {'/contact'}
       />



    </Layout>
    </>

)
}