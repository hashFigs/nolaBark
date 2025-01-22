import AdminLayout from "../../components/admin/adminLayout";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from '../../components/admin/product/productAddForm'


export default function Products() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });

  useEffect(() => {
    if (status === "authenticated") {
      fetchProducts();
    }
  }, [status]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (name, price, description, ) => {
    try {
      newProduct.name= name;
      newProduct.price=price;
      newProduct.description=description; 

      console.log("New Product", newProduct)
      const { data } = await axios.post("/api/products", newProduct);
      setProducts((prev) => [...prev, data]);
      setShowForm(false);
      setNewProduct({ name: "", price: "", description: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session?.user?.isAdmin) {
    return <p>Access Denied</p>;
  }

  return (
    <AdminLayout>
      
      <h1>Manage Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <div className="text-gray-dark">
          <p>No products available. Add the first product:</p>
          {showForm ? (
             <ProductForm
             onSubmit={handleAddProduct}
             initialValues={newProduct}
           />
          ) : (
            <button 
              className="button-standard"
              onClick={() => setShowForm(true)}>Create Product
            </button>
          )}
        </div>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - ${product.price}
              <button
                className="button-standard">
                Edit
              </button>
              <button
                className="button-standard">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </AdminLayout>
  );
}
