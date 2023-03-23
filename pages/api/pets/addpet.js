import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";
import md5 from "md5";
import jwt from "jsonwebtoken"



export default async function handler(req, res) {

    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");
/*
    const authSession = await getAuthSession(ctx); 

    if (!authSession) {
        res.status(403).json({
          status: "Non-authenticated user.",
        });
      } else {
*/



    switch (method) {
        
        case "POST": //User Register
            
            const { name, breathe, size, userId  } = req.body;
            console.log("Name", req.body);
            let pet = await db.collection("pets").insertOne({
                name: name, 
                breathe: breathe, 
                size: size,
                userId: userId
      })

            
        res.status(200).json(pet);   
          
         break;
        default:
          res.setHeader("Allow", ["POST"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}
//}