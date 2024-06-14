import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import './navbars.css';
import { Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menusOpen, setMenusOpen] = useState(false);

    const handleMenuMouseEnter = () => {
        setMenuOpen(true);
    };

    const handleMenuMouseLeave = () => {
        setMenuOpen(false);
    };

    function handlemenushort() {
        setMenusOpen(true)
    }

    function handleremove() {
        setMenusOpen(false)

    }

    return (
        <div className='bg-white'>
            <div className="bg-red-300 rounded-sm text-black p-2">
                <div className="flex justify-between items-center p-2 mx-10 font-serif">
                    <div className="font-serif flex items-center cursor-pointer">
                        <h1 className="text-amber-950">Shiny Restaurant</h1>
                    </div>
                    <div className="lg:flex gap-10 items-center justify-between hidden">
                        <Link to='/' className="block  text-gray-800 ">HOME</Link>

                        <div
                            className="relative group"
                            onMouseEnter={handleMenuMouseEnter}
                        >
                            <p className="cursor-pointer">
                                MENU
                            </p>
                            {menuOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                                    onMouseLeave={handleMenuMouseLeave}

                                >
                                    <Link to='/Couples' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tables Booking</Link>
                                    <Link to='/Burger' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Foods</Link>

                                </div>
                            )}
                        </div>
                        <Link to='/Fotter' className="cursor-pointer">Contact</Link>

                    </div>

                    <div className="bg-blue-500 rounded hidden lg:block">
                        <Link to={'/Billing'}><button className="p-2">RESERVATION</button></Link>
                    </div>
                    <div className='lg:hidden'>
                        {
                            menusOpen ? <MdCancel className='cursor-pointer' onClick={handleremove} /> : <MdMenu onClick={handlemenushort} className='cursor-pointer' />
                        }
                    </div>
                </div>
            </div>
            <div className='mt-2 bg-gray-200 text-black lg:hidden' >
                {
                    menusOpen ?
                        <div className='p-5 font-bold space-y-2'>
                            <Link to='/' className="block  text-gray-800 hover:bg-gray-200 cursor-pointer">HOME</Link>

                            <div
                                className="relative group"
                                onMouseEnter={handleMenuMouseEnter}
                            >
                                <p className="cursor-pointer">
                                    MENU
                                </p>
                                {menuOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg "
                                        onMouseLeave={handleMenuMouseLeave}>
                                        <Link to='/Couples' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tables Booking</Link>
                                        <Link to='/Burger' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Foods</Link>

                                    </div>
                                )}
                            </div>
                            <div>
                            <Link to='/Fotter'>Contact</Link>

                                </div>
                            <div >
                                <Link to={'/Billing'}><button className='bg-blue-500 rounded p-2'>RESERVATION</button></Link>
                            </div>
                        </div> : ''
                }

            </div>
        </div>

    );
}

export default Navbar;
