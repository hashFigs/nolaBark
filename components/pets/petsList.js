import Image from "next/image";
import utilStyles from '../../styles/utils.module.css';

export default function PetsList({petsList}) {

  //const petsList = [{"name": "Fido", "size": "small"}, {"name": "Fido2", "size": "small"}] 
      return (
      <div>
        { petsList.map((pet) => {
          return (
          <>
         
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
            <div class="flow-root">  
                <a href="#" class="float-left">
                  <Image
                      priority
                      src="/images/possom.png"
                      className={utilStyles.borderCircle}
                      height={144}
                      width={144}
                      alt=""
                    />
                </a>
              <div className="float-right">
                <h5 class="  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pet.name}</h5>

                <p className="float-fight">{`Pet Size: ${pet.size}`}</p>
                <p className="float-fight">{`Pet Breathe: ${pet.breathe}`}</p>
                <p className="float-fight">{`Pet Size: ${pet.size}`}</p>
                </div>
            </div> 
          </div>
          <br></br>
          </>
          );
        }) }
      </div>
    );
  };



  