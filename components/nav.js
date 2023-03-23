
import Link from "next/link"
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'


export default function Navbar() {

const [logintext, setLogintext] = useState('login'); 
const { data: session } = useSession()
const router= useRouter()

const handleSubmit = async (e) => {
    e.preventDefault();

    //let isValidForm = handleValidation();
    if(session){
        signOut();
    }else{
        router.push('/login')
    }

}

useEffect(() => {
  
    if (session) {
        setLogintext('logOut')
    }else{
        setLogintext('logIn')
    }
}, [session])

return(
    <>
<nav className="flex flex-row justify-between items-center p-8 bg-pink-50 dark:bg-blue-900">
<div className="relative flex flex-row space-x-2 items-center">
  <div className="absolute h-6 w-4 bg-blue-500 z-10"></div>
  <div className="absolute top-0 left-1 h-6 w-4 bg-red-500"></div>
  <h1 className="pl-8 text-2xl font-bold italic text-gray-700 dark:text-gray-50">
    FigsTemplate
  </h1>
</div>
<div className="flex flex-row items-center space-x-8">
  <Link
    href="/"
    className="hidden lg:block font-light text-base text-gray-600 dark:text-gray-50"
  >
    Home
  </Link>
  <Link
    href="/about"
    className="hidden lg:block font-light text-base text-gray-600 dark:text-gray-50"
  >
    About
  </Link>
  <Link
    href="/blog"
    className="hidden lg:block font-light text-base text-gray-600 dark:text-gray-50"
  >
    Blog
  </Link>
  <Link
    href="/contact"
    className="hidden lg:block font-light text-base text-gray-600 dark:text-gray-50"
  >
    Contact
  </Link>
</div>
<div className="flex flex-row items-center space-x-8">
  
         
  <form onSubmit={handleSubmit}>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              {logintext}
              
            </button>
 
   </form>
         













</div>
</nav>
</>
)
}