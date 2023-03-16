import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";
import md5 from "md5";
import jwt from "jsonwebtoken"


export default async function handler(req, res) {
    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        
        case "POST": //User login
          const { email, password } = req.body;
                   
            let user = await db.collection("users").findOne(
                { email: email,
                  password: md5(password)  
                 },
                );
            
            if (!user) throw (res.status(405).json({
                Status: "OK",
                ErrorCode: "02",
                Description:"invalid email / password"
                 
            }));
            else {
             
                var token = jwt.sign({ userId: user._id.toString(), expiresAt: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000) }, process.env.TOKEN_SECRET);
                
                var session = await db.collection("session").insertOne({
                    token: token, 
                    expiresAt: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
                    userId: user._id  
           })
        }    
        res.status(200).json({
            Status: "OK",
            token: token,
            userId: user._id,
            
        });   
          
          break;
        default:
          res.setHeader("Allow", ["POST"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}









 