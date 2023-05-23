

export default function PetInfo() {


    return(
    <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Pet Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="petName" type="text" placeholder="titus"/>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Pet Age
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="4"/>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Size
            </label>
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="breed" type="text">
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
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="breed" type="text">
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
   
</div>
    )


}