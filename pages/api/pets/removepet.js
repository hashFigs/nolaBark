import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson"




export default async function handler(req, res) {

    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        
        case "DELETE": //REMOVING  PET
            
            const { petId } = req.body;

            let token = req.headers.authorization.split(" ")[1];
            
            let session = await db.collection("session").findOne({
                token: token
           })
            
        
           
            let pet = await db.collection("pets").findOne({_id: new ObjectId(`${petId}`)})
            
            console.log("Pet", pet);
            if(pet.userId != session.userId) {
                res.status(200).json({message: "You are not authorized to delete this pet"});  
            }
            
            
            let removedPet = await db.collection("pets").deleteOne({
                _id: new ObjectId(`${petId}`)})

            
        res.status(200).json(removedPet);   
          
         break;
        default:
          res.setHeader("Allow", ["DELETE"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}
