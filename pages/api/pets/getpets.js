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
            
           // const { name, breathe } = req.body;
            
            console.log("userId", req.body);
            
            let pet = await db.collection("pets").find({
      })

            
        res.status(200).json(pet);   
          
         break;
        default:
          res.setHeader("Allow", ["POST"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}