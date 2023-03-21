import { useState } from "react";
import Layout from "../components/layout"

export default function Login({ allPostsData }) {
   const [username, setUsername]= useState('');
   const [password, setPassword]= useState('');
    
   
   const handleSubmit = async (e) => {
    
    e.preventDefault();

    try {
		const res = await fetch("api/users/login", {
            method: "POST",
            body: JSON.stringify({email:username, password: password}),
            headers: {
                "Content-Type": "application/json",
             },
        });
		const data = await res.json();
		console.log("DAta!!", data);
    

	} catch (err) {
		console.log(err);
	}
   }

    return (
      <Layout home>
      
      <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
        >
         
         <h1> Log In </h1> 
          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Username<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="username"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

        <label
            htmlFor="password"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            password<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />


          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              Log In
            </button>
            </div>
          
          </form>
      </Layout>  
    )}