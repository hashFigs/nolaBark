import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { BsMenuUp } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Navigation = () => {
    const [theme, setTheme] = useState('light');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Navbar fluid={true} rounded={false}>
            <Navbar.Brand className="container flex flex-wrap items-center justify-between  mx-auto">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Some Logo Here
                    </span>
                </Link>
                <div className="hidden lg:block">
                    <Link className="dark:text-white p-5" to="/">
                        Home
                    </Link>
                    <Link className="dark:text-white p-5" to="/academy">
                        Academy
                    </Link>
                    <Link className="dark:text-white p-5" to="/signal">
                        About
                    </Link>
                </div>
                <div className="flex md:order-2">
                    {theme === 'dark' ? (
                        <button
                            onClick={handleThemeSwitch}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Light Mode
                        </button>
                    ) : (
                        <button
                            onClick={handleThemeSwitch}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Dark Mode
                        </button>
                    )}
                    <div className="lg:hidden flex align-middle justify-center p-1 text-gray-800 dark:text-white">
                        <IconContext.Provider value={{ size: 30 }}>
                            <BsMenuUp onClick={(e) => setToggle(!toggle)} />
                        </IconContext.Provider>
                    </div>
                </div>
            </Navbar.Brand>
            {toggle ? (
                <div className="p-2 m-5 bg-white dark:bg-gray-600 rounded-lg dark:text-white w-full">
                    <div>
                        <Navbar.Link as={Link} to="/">
                            Home
                        </Navbar.Link>

                        <Navbar.Link as={Link} to="/academy">
                            Academy
                        </Navbar.Link>

                        <Navbar.Link as={Link}>About</Navbar.Link>
                        
                    </div>
                </div>
            ) : null}
        </Navbar>
    );
};

export default Navigation;