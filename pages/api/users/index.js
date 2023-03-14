import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";
import md5 from "md5";


export default async function handler(req, res) {
    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        case "GET":
          const allUsers = await db.collection("users").find({}).toArray();
          res.status(200).json(allUsers);
          break;
        case "POST": //User Register
          const { email, password } = req.body;
                   
            let user = await db.collection("users").findOne(
                { email: email },
                );
            
            if (user) throw (res.status(200).json({
                Status: "OK",
                ErrorCode: "01",
                Description:"invalid email"
                 
            }));
            else {
             
             user = await db.collection("users").insertOne({
             email: email, 
             password: md5(password)  
           })}       
          res.status(200).json(user);
          break;
        default:
          res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}