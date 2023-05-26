import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";
import md5 from "md5";
import jwt from "jsonwebtoken"


export default async function handler(req, res) {
    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        
        case "POST": //User Register
          const { email, password } = req.body;
                   
            let user = await db.collection("users").findOne(
                { email: email },
                );
            
            if (user) return (res.status(405).json({
                Status: "OK",
                ErrorCode: "01",
                Description:"invalid email"
                 
            }));
            else {
            const urlVeriToken = jwt.sign({ user: email.toString() }, process.env.TOKEN_SECRET);

             user = await db.collection("users").insertOne({
             email: email, 
             password: md5(password),
             urlVeriToken: urlVeriToken,
             createdAt:  new Date( Date.now()) ,
             updatedAt: new Date( Date.now()) ,  
             
           })
        }    
        res.status(200).json(user);   
          
          break;
        default:
          res.setHeader("Allow", ["POST"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}