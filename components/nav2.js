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
  className="p-4 !bg-gray-600 "
>
  <Navbar.Brand href="/">
    <Image
        src="/images/cattle.png"
        className="mr-3 h-6 sm:h-9"
        width={60}
        height={70}
        alt="" 
    />
   
    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
      Barkuskrewe
    </span>
  </Navbar.Brand>

  <div className="flex md:order-2">

  
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={false}
      className="text-white"
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
<>
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button>
      Get startedyy
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/about">
      About Us
    </Navbar.Link>
    <Navbar.Link href="/services">
      Services
    </Navbar.Link>
    <Navbar.Link href="/blog">
      Blog
    </Navbar.Link>
    <Navbar.Link href="/contact">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
</>
*/
)
}
