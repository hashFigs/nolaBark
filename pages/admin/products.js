import AdminLayout from "../../components/admin/adminLayout";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from '../../components/admin/product/productAddForm'
import ProductsList from "../../components/admin/product/productslist";


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

      const { data } = await axios.post("/api/products", newProduct);
      setProducts((prev) => [...prev, data]);
      setShowForm(false);
      setNewProduct({ name: "", price: "", description: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (productId ) => {
    try {
      
    const { data } = await axios.delete(`/api/products?productId=${productId}`);
      console.log(data)
      setProducts((prev) => prev.filter((product) => product._id !== productId));

      setShowForm(false);    
      
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  const handleUpdateProduct = async (productId, updatedProduct) => {

    console.log("insindehandle - product", productId )
    console.log("insindehandle - updated product", updatedProduct )

    try {
      const { data } = await axios.put(`/api/products?productId=${productId}`, updatedProduct);
      console.log("return", data)
      setProducts((prev) =>
        prev.map((product) => (product._id === productId ? data : product))
      );
    } catch (error) {
      console.error("Error updating product:", error);
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
       <>
        
          <ProductsList
            products ={ products }
            handleDeleteProduct ={handleDeleteProduct }
            handleUpdateProduct={handleUpdateProduct}  >

          </ProductsList>
        </>
      )}
    </AdminLayout>
  );
}
