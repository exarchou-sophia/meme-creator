import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <nav
        className="flex justify-between w-full  px-4 py-1 bg-teal-300 top-0 sticky">
        <Link to="/" className="mr-4 text-lg text-black">
            Home
        </Link>
        <Link to="/gallery" className="text-lg text-black">
            Gallery
        </Link>
    </nav>
);