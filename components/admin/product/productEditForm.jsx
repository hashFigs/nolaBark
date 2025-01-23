import React, { useState } from "react";

export default function ProductsList({ products, handleDeleteProduct, handleUpdateProduct }) {
  const [editingProductId, setEditingProductId] = useState(null);
  const [editValues, setEditValues] = useState({ name: "", price: "", description: "" });

  const startEditing = (product) => {
    setEditingProductId(product._id);
    setEditValues({
      name: product.name,
      price: product.price,
      description: product.description,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    handleUpdateProduct(editingProductId, editValues);
    setEditingProductId(null); // Exit editing mode
  };

  const cancelEdit = () => {
    setEditingProductId(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-lg shadow-lg p-6 dark:bg-blue-500"
        >
          {editingProductId === product._id ? (
            <>
              <input
                type="text"
                name="name"
                value={editValues.name}
                onChange={handleEditChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="number"
                name="price"
                value={editValues.price}
                onChange={handleEditChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                name="description"
                value={editValues.description}
                onChange={handleEditChange}
                className="w-full mb-2 p-2 border rounded"
              ></textarea>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={saveChanges}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-50">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Price: ${product.price}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Product description: {product.description}
              </p>
              <div className="button-horizontal-group mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => startEditing(product)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
