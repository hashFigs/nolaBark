import { useState } from "react";
import Layout from "../components/layout";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../components/layout.module.css";
import Link from "next/link";
import { set } from "date-fns";

export default function Login({ allPostsData }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState("invisible");
  const [errorMessages, setErrorMessages] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    if (result?.error) {
      setVisibility("p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 justify-center");
      setErrorMessages("Please provide a valid username and password");
      console.log("ERROR", result);
    } else {
      
      router.push("/dashboard");
    }
  
  };

  return (
    <Layout home>

      <div class={visibility} role="alert">
        <span class="font-medium">{errorMessages}</span> 
      </div>
      
      <div className={styles.container}>
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
            
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? 
                
                <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </Link>

               
            </p>


              


          </div>
                   
            
          

        </form>
      </div>
    </Layout>
  );
}
