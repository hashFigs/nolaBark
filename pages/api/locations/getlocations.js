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
            
            let token = req.headers.authorization.split(" ")[1];    
            let session = await db.collection("session").findOne({
                token: token
            })
            
            let _userId = session.userId;
            
            
            let locations = await db.collection("locations").find({
                userId: _userId
            })

            locations = await locations.toArray();
            
       
       res.status(200).json(locations);   
          
         break;
        default:
          res.setHeader("Allow", ["GET"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}