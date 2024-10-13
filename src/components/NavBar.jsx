import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => { }

return (
    <nav className="z-10 flex justify-between w-full  px-4 md:px-8  py-1 bg-teal-300 top-0 sticky relative inset-0 w-full h-full object-cover" >
        <Link to="/" className="mr-4 text-lg text-black ">

        </Link>
        <Link to="/gallery" className="text-lg text-black ">
            <Gallery />
        </Link>
    </nav>
); M