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
            "sticky"
        )}
    >
        <Link to="/" className="mr-4 text-lg text-white">
            Home
        </Link>
        <Link to="/gallery" className="text-lg text-white">
            Gallery
        </Link>
    </nav>
);