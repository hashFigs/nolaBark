import Link from "next/link"
import react, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "next/image";


export default function Navbar2() {
const [isOpen, toggleSidebar] = useState(false);
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
<Navbar
  fluid={true}
  rounded={false}
  className="p-4 bg-navbar "
>
  <Navbar.Brand href="/">
    <Image
        src="/images/cattle.png"
        className="mr-3 h-9 sm:h-9"
        width={100}
        height={120}
        alt="" 
    />
   
   
   <h2 class ="text-3xl sm:text-2xl font-extrabold text-gray-600">TREME TAILS</h2>
  </Navbar.Brand>
  

  <div className="flex md:order-2">

  
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={false}
      className="text-white hover:text-gray-300"
    >
      Home
    </Navbar.Link>
    <Navbar.Link 
        href="/about"
        className="text-white"
        >
      About Us
    </Navbar.Link>
    <Navbar.Link href="/services" className="text-white">
      Services
    </Navbar.Link>
    <Navbar.Link href="/blog" className="text-white">
      Blog
    </Navbar.Link>
    <Navbar.Link href="/contact" className="text-white">
      Contact
    </Navbar.Link>
    
  </Navbar.Collapse>
  

  
</Navbar>

    </>
/*
  <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
      Wigging Tails
    </span>
*/
)
}
