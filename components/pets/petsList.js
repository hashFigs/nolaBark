import Image from "next/image";
import PetCard from "./petCard";
import utilStyles from '../../styles/utils.module.css';


export default function PetsList({petsList, setPet}) {
      return (
      <div>
        { petsList.map((pet) => {
          return (
            <>
              <PetCard 
                  name={pet.name} 
                  breed={pet.breed}
                  image={'cattle.png'}
                  petId={pet._id}
                  setPet={setPet}/>       
               </>
              );
          })
        }
     </div>
      )
  };

  