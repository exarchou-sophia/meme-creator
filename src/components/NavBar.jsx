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
            "bg-indigo-500",
            "top-0",
            "sticky",
        )}
    >
        <Link to="/" className="text-lg text-white">
            <img src='./logo.png' className='h-16' />
        </Link>

        {(Object.keys(localStorage).length > 0) && (
            <Link to="/gallery" className="text-xl m-2 hover:text-amber-300 text-lg text-white transition-colors duration-300text-white pr-4" style={{ margin: "auto 0" }}>
                Gallery
            </Link>
        )}
    </nav>
);