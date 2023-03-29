import ServiceCard from "../services/servicesCard";
import ItemCard from "./itemCard";

export default function Services () {

    return(
        <>
         
       
        <div class="bg-orange-600 ">
           
            <div class="container mx-auto ">

          
            <h1 className="text-center text-5xl py-10"> Our Services</h1>
            <h2 className="text-center text-2xl">We offer a Variety of Services. Here are our most popular:</h2>
      
            
            <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
                <div class="flex justify-center p-6 text-6xl">
                <ItemCard
                    title= {"Pet Sitting"}
                    description = { "Whether you need care for your cat, bird, lizard, guinea pig we've got you covered."}
                    price = { "21"}
                    image={"small-dog2.jpg"}
                />      
                </div>

                <div class="flex justify-center p-6 text-6xl " >
                <ItemCard
                    title= {"Dog Walking"}
                    description = { "A variety of times and services to meet you and your dog's needs."}
                    price = { "26"}  
                    image={"regular-daily.jpg"}
                /> 
                </div>
                
                <div  class="flex justify-center p-6 text-6xl ">
                <ItemCard
                title= {"In-Home Boarding"}
                description = { "We know that leaving your pet is nerve-racking so let our care associate stay at your place."}
                price = { "33"}
                image={"explorer-dog.jpg"}
                /> 
                </div>
            
                <div  class="flex justify-center p-6 text-6xl">
                <ItemCard
                title= {"House check-ins"}
                description = { "We have seen it all. Have one of our insured pet sitters check in on your place to make sure your home is safe and secure.  We even make sure plants are water, fish are fed, sign for packages and take in mail. "}
                price = { "44"}
                image={"energetic-dog.jpg"}
                /> 
                </div>
            </div>
        </div> 
        </div>


        </>
    )
}