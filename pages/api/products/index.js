import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.NEXT_DATABASE_NAME);

  switch (req.method) {
    case "GET":
      const products = await db.collection("products").find().toArray();
      res.json(products);
      break;

    case "POST":
      const newProduct = req.body;
      const result = await db.collection("products").insertOne(newProduct);
      res.status(201).json(result);
      break;

    case "PUT":
      const { id, ...updates } = req.body;
      await db.collection("products").updateOne({ _id: id }, { $set: updates });
      res.status(200).send("Product updated");
      break;

    case "DELETE":
      const { productId } = req.query;
      await db.collection("products").deleteOne({ _id: productId });
      res.status(200).send("Product deleted");
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
