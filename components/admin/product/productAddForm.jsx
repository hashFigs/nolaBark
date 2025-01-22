import React, { useState } from 'react';

export default function ProductForm({ onSubmit, initialValues = { name: "", price: "", description: "" } }) {
  const [name, setName] = useState(initialValues.name);
  const [price, setPrice] = useState(initialValues.price);
  const [description, setDescription] = useState(initialValues.description);


  return (
    <div className="flex justify-center">

    <form
        className=" w-1/2 rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
    >
       <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Product name<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
            type="text"
            placeholder="Product Name"
            value={name}
            className='input-text-field'
            onChange={(e) => setName(e.target.value)}
        />
         <label
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Product Price<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
            type="number"
            placeholder="Product Price"
            value={price}
            className='input-text-field'
            onChange={(e) => setPrice(e.target.value)}
        />
         <label
            
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Product description<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
            type="text"
            placeholder="Product description"
            className='input-text-field'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />

      <div className='button-horizontal-group'>
        <button  
            className="button"
            onClick={() => onSubmit(name, price, description )} >
                Add Product
        </button>
        
        <button 
            className="button"
            onClick={() => onSubmit(null)}>
                Cancel
        </button>
      </div>
    
    </form>
    </div>
  );
}