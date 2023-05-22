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
            
            console.log("Body", req.body);                  
            console.log("HEaders", req.headers);
            
            let pet = await db.collection("pets").findOne({
                userId: req.headers.token
           })
            console.log("pet", pet);

        /* res.status(200).json([
            { _id:123, name: "Fido", size: "small", breathe: "air", _userId: "641bd832abff3bf1fc454cf7"},
            { _id:12333, name: "Fi434do", size: "small", breathe: "air", _userId: "641bd832abff3bf1fc454cf7"}
        ]); */ 
       res.status(200).json([pet]);   
          
         break;
        default:
          res.setHeader("Allow", ["GET"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}