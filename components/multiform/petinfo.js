

export default function PetInfo({formData, setFormData}) {


    return(
 
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Pet Name
            </label>
            
            <input 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                id="petName" 
                type="text" 
                placeholder="titus"
                onChange={(e) => {
                    setFormData({
                      ...formData,
                      petName: e.target.value,
                    })
                  }}
                  value={formData.petName}
                  />
            
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Pet Age
            </label>
            <input 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                id="age" 
                type="text" 
                placeholder="4"
                onChange={(e) => {
                    setFormData({
                      ...formData,
                      petAge: e.target.value,
                    })
                  }}
                  value={formData.petAge}
                  />
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Size
            </label>
            <select 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                id="breed" 
                type="text"
                onChange={(e) => {
                    setFormData({
                      ...formData,
                      petSize: e.target.value,
                    })
                  }}
                  value={formData.petSize}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
            </select>
        </div>



        <div class="inline-block relative w-64">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Breed Type
            </label>
            <select class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="breed" type="text">
                <option>Labrador Retriever</option>
                <option>Golden Retriever</option>
                <option>Beagle</option>
                <option>Dachshund</option>
                <option>Australian Shepherd</option>
                <option>Chihuahua</option>
                <option>Pomeranian</option>
                <option>Schnauzer</option>
                <option>Australian Cattle Dog</option>
                <option>Havanese</option>

            </select>
          
        </div>


    </form>
   

    )


}