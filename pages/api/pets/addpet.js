import { users } from "../../../data";
import clientPromise from "../../../lib/mongodb";




export default async function handler(req, res) {

    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        
        case "POST": //User Register
            
            const { name, breed, size } = req.body;

            let token = req.headers.authorization.split(" ")[1];

            console.log("Token", token)
            
            let session = await db.collection("session").findOne({
                token: token
           })
            
          console.log("session", session); 
           //   let userId = user._id.toString();
            

            console.log("Body", req.body);
            console.log("HEaders", req.headers);

            let pet = await db.collection("pets").insertOne({
                name: name, 
                breed: breed, 
                size: size,
                userId: session.userId,
                createdAt:  new Date( Date.now()) ,
                updatedAt: new Date( Date.now()) ,
      })

            
        res.status(200).json(pet);   
          
         break;
        default:
          res.setHeader("Allow", ["POST"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
}
