import clientPromise from "../../../lib/mongodb";


export default async function handler(req, res) {

    const { method } = req;
    const client = await clientPromise;
    const db = client.db("test");

    switch (method) {
        
        case "POST": //Adding a new  Location
            
            const { address, city, zip  } = req.body;

            let token = req.headers.authorization.split(" ")[1];

            console.log("Token", token)
            
            let session = await db.collection("session").findOne({
                token: token
           })
          
            let pet = await db.collection("locations").insertOne({
                address: address, 
                city: city,
                zip: zip,
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
