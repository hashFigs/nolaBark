import AdminLayout from "../../components/admin/adminLayout";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../../components/admin/product/productAddForm";
import ProductsList from "../../components/admin/product/productslist";

export default function Products() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });

  // Fetch products on component mount or if session changes
  useEffect(() => {
    if (status === "authenticated") {
      fetchProducts();
    }
  }, [status]);

  const fetchProducts = async () => {
    try {

      const userId = session?.user?.user?._id;
      console.log("before") 
      const { data } = await axios.get(`/api/products?userId=${userId}`);
      console.log("after data")
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (userId, name, price, description) => {
    try {
      const newProduct = { userId, name, price, description };
      const { data } = await axios.post("/api/products", newProduct);
      setProducts((prev) => [...prev, data]);
      setShowForm(false); 
      setNewProduct({ name: "", price: "", description: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products?productId=${productId}`);
      setProducts((prev) => prev.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdateProduct = async (productId, updatedProduct) => {
    try {
      const { data } = await axios.put(`/api/products?productId=${productId}`, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId ? { ...product, ...data } : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle loading and admin access checks
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session?.user?.isAdmin) {
    return <p>Access Denied</p>;
  }

  return (
    <AdminLayout>
      <div className="relative">
        {/* Add Product Button */}
        <button
          className="absolute top-0 right-0 px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
          onClick={() => setShowForm(true)}
        >
          Add Product
        </button>

        <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Products</h1>

        {/* Show Add Form */}
        {showForm && (
          <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <ProductForm
              onSubmit={handleAddProduct}
              initialValues={newProduct}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        {/* Products List */}
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products available. Add the first product above.</p>
        ) : (
          <ProductsList
            products={products}
            handleDeleteProduct={handleDeleteProduct}
            handleUpdateProduct={handleUpdateProduct}
          />
        )}
      </div>
    </AdminLayout>
  );
}
