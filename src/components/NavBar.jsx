import React from 'react';
import { Link } from 'react-router-dom';
import { toClassNames } from "../utils/style";

export const NavBar = () => (
    <nav
        className={toClassNames(
            "flex",
            "justify-between",
            "w-full",
            "px-4",
            "py-4",
            "bg-indigo-500",
            "top-0",
            "sticky",
            "z-10"

        )}
    >
        <Link to="/" className="mr-4 text-lg text-white">
            <img src='./logo-removebg.png' className='w-1/2 h-12 object-cover' />
        </Link>
        <Link to="/gallery" className="text-xl m-2 hover:text-amber-300 text-lg text-white transition-colors duration-300text-white">
            Gallery
        </Link>
    </nav>
);