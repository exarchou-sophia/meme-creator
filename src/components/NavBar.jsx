import React from 'react';
import { Link } from 'react-router-dom';
import { toClassNames } from "../utils/style";

export const NavBar = () => (
    <nav
        style={{ zIndex: 1000 }}
        className={toClassNames(
            "flex",
            "justify-between",
            "w-full",
            "px-4",
            "py-4",
            "bg-indigo-500",
            "top-0",
            "sticky",
        )}
    >
        <Link to="/" className="mr-4 text-lg text-white">
            <img src='./logo-removebg.png' className='w-1/2 h-12 object-cover' />
        </Link>

        {(Object.keys(localStorage).length > 0) && (
            <Link to="/gallery" className="text-xl m-2 hover:text-amber-300 text-lg text-white transition-colors duration-300text-white">
                Gallery
            </Link>
        )}
    </nav>
);