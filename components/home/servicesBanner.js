import ServiceCard from "../services/servicesCard";
import ItemCard from "./itemCard";

export default function ServicesBanner() {

    return(
        <>
         
       
        <div class="section-bg">
           
            <div class="container mx-auto ">

            <h2 className="text-center text-3xl py-10 font-semibold"> OUR SERVICES</h2>
            <h2 className="text-center text-2xl text-gray-600 dark:text-gray-200 leading-6 font-normal ">We offer a variety of services. Here are our most popular:</h2>
      
            
            <div class="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-2">
                <div class="flex justify-center py-6 text-6xl">
                <ItemCard
                    title= {"Pet Sitting"}
                    description = { "We provide pet care services that cater to a variety of animals including cats, birds, lizards, and guinea pigs."}
                    image={"house3.jpg"}
                    link={"/pet-sitting"}
                />      
                </div>

                <div class="flex justify-center py-6 text-6xl " >
                <ItemCard
                    title= {"Dog Walking"}
                    description = { "We offer a range of services and scheduling options for dog walking that can be customized to meet both you and your dog's specific needs."}
                    image={"regular-daily.jpg"}
                    link={"/dog-walking"}
                /> 
                </div>
                
                <div  class="flex justify-center py-6 text-6xl ">
                <ItemCard
                title= {"In-Home Boarding"}
                description = { "We understand that leaving your beloved pet can be stressful, which is why we offer in-home boarding services where our caretaker can stay at your residence to provide the necessary care and attention your pet deserves."}
                image={"explorer-dog.jpg"}
                link={"/in-home-boarding"}
                /> 
                </div>
            
                <div  class="flex justify-center py-6 text-6xl">
                <ItemCard
                title= {"House check-ins"}
                description = { "Our pet sitters have extensive experience in house check-ins, ensuring that your home is safe and secure. We also offer additional services such as watering plants, feeding fish, signing for packages, and collecting mail to provide you with complete peace of mind while you're away."}
                image={"house1.jpg"}
                link={"/house-check-ins"}
                /> 
                </div>
            </div>
        </div> 
        </div>


        </>
    )
}

// <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
