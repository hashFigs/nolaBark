import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {

    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        
        case "POST": //User Register
            
            const { name, lastname, streetAdress, zipCode, petBreed, petSize, petName, petAge } = req.body;

            let token = req.headers.authorization.split(" ")[1];

            console.log("Token", token)
            
            let session = await db.collection("session").findOne({
                token: token
           })
            
  
            let pet = await db.collection("pets").insertOne({
                name: petName, 
                breed: petBreed, 
                size: petSize,
                userId: session.userId,
                createdAt:  new Date( Date.now()) ,
                updatedAt: new Date( Date.now()) ,
            })
            
            let location = await db.collection("locations").insertOne({
                address: petName, 
                city: petBreed, 
                size: petSize,
                zip: zipCode,
                userId: session.userId,
                createdAt:  new Date( Date.now()) ,
                updatedAt: new Date( Date.now()) ,
            })

            
        res.status(200).json({pet, location});   
          
         break;
        default:
          res.setHeader("Allow", ["POST"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}
