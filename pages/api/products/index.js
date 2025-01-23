import clientPromise from "../../../lib/mongodb";
const { ObjectId } = require("mongodb");

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.NEXT_DATABASE_NAME);
  const { productId } = req.query; 

  switch (req.method) {
    case "GET":
      const products = await db.collection("products").find().toArray();
      res.json(products);
      break;

    case "POST":
      const newProduct = req.body;
      const requiredFields = ["name", "price", "description"];

      const missingFields = requiredFields.filter(
        (field) => !(field in newProduct)
      );

      if (missingFields.length > 0) {
        return res.status(400).json({
          error: `Missing required fields: ${missingFields.join(", ")}`,
        });
      }
      const result = await db.collection("products").insertOne(newProduct);
      res.status(201).json(result);
      break;

    case "PUT":
      const { ...updates } = req.body;
      const response = await db.collection("products").updateOne(
        { _id: new ObjectId(productId) },
        { $set: updates }
      );    
      res.status(200).send("Product updated");
      break;

    case "DELETE":
      
      const ret = await db.collection("products").deleteOne({ _id:  new ObjectId(productId) });
     
      res.status(200).send("Product deleted");
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
