import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";
import md5 from "md5";
import jwt from "jsonwebtoken"


export default async function handler(req, res) {
    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        
        case "GET": //get pets
            
            console.log("HEaders", req.headers);

            let token = req.headers.authorization.split(" ")[1];
            
            let session = await db.collection("session").findOne({
                token: token
           })
            
           let _userId = session.userId;
            
            
           console.log("userId", _userId);

            let pets = await db.collection("pets").find({
                userId: _userId
           })   
            pets = await pets.toArray();
            console.log("pets", pets);

       
       res.status(200).json(pets);   
          
         break;
        default:
          res.setHeader("Allow", ["GET"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}