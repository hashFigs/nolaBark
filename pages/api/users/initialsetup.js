import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson"
import { MongoClient } from "mongodb";

export default async function handler(req, res) {

    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        
        case "POST": //User Register
            
            const { name, lastname, streetAdress, city, zipCode, breed, size, petName, petAge } = req.body;

            let token = req.headers.authorization.split(" ")[1];

            console.log("Token", token)
            
            let session = await db.collection("session").findOne({
                token: token
           })
             
           //insert a new pet   
           let pet = await db.collection("pets").insertOne({
                name: petName, 
                breed: breed, 
                size: size,
                userId: session.userId,
                createdAt:  new Date( Date.now()) ,
                updatedAt: new Date( Date.now()) ,
            })
            
            
            //insert a new location
            let location = await db.collection("locations").insertOne({
                address: streetAdress, 
                city: city, 
                zip: zipCode,
                userId: session.userId,
                createdAt:  new Date( Date.now()) ,
                updatedAt: new Date( Date.now()) ,
            })
             

            //update user name and surname

            const filter = { _id: new ObjectId(`${session.userId}`) };
            const updateDoc = {
                $set: {
                    name: name,
                    surname: lastname,    
                },
                };

            let userResult = await db.collection("users").updateOne(filter, updateDoc);
            console.log(userResult)
        res.status(200).json({pet, location, userResult});   
          
         break;
        default:
          res.setHeader("Allow", ["POST"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}
