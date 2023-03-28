import Image from "next/image";
import ServiceCard from "./servicesCard";
export default function DogWalking () {

  return (
  <>
  <br>
  </br>
    <div class="container mx-auto ">
      
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div class="flex justify-center p-6 text-6xl">
          <ServiceCard
            title= {"20 minuts"}
            description = { "Best for small dogs who don't need to go too far."}
            price = { "21"}
            image={"small-dog2.jpg"}
          />      
        </div>

        <div class="flex justify-center p-6 text-6xl " >
          <ServiceCard
          title= {"30 minuts"}
          description = { "Great for all dogs who need regular daily walks."}
          price = { "26"}  
          image={"regular-daily.jpg"}
          /> 
        </div>
        
        <div  class="flex justify-center p-6 text-6xl ">
          <ServiceCard
          title= {"45 minuts"}
          description = { "For dogs who like to explore a little more."}
          price = { "33"}
          image={"explorer-dog.jpg"}
          /> 
        </div>
      
        <div  class="flex justify-center p-6 text-6xl">
          <ServiceCard
          title= {"60 minuts"}
          description = { "For energetic dogs who need the most exercise."}
          price = { "44"}
          image={"energetic-dog.jpg"}
          /> 
        </div>
    </div>
  </div>
</>
);
}