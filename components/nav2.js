
import Link from "next/link"
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-react";
import { Button } from "flowbite-react";


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
)
}














