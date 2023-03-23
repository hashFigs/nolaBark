import Image from "next/image";
import utilStyles from '../../styles/utils.module.css';

export default function PetsList({ petsList}) {

  //const petsList = [{"name": "Fido", "size": "small"}, {"name": "Fido2", "size": "small"}] 
      return (
      <div>
        { petsList.map((pet) => {
          return (
          <>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                    priority
                    src="/images/possom.png"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt=""
                  />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pet.name}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  
              </div>
          </div>
          <br></br>
          </>
          );
        }) }
      </div>
    );
  };



  