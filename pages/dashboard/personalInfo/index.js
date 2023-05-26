
export default function PersonalInfo({user, city, address, zip}) {


    return(
        <>
        <div class="font-bold"> Address</div>    
        <div class="grid grid-cols-2 gap-4">
            
            <div class="p-5 bg-purple-300 rounded">
                <p>{address}</p>
                <p> {city}</p>
                <p>{zip}</p>
            </div>
            
            <div>   
                2
            </div>

        </div>
        
        
        </>
        )
    }

