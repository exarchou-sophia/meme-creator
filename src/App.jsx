import './App.css'

import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { GalleryPage } from "./pages/GalleryPage"
import { getMemes } from './components/api';
import { useState, useEffect } from 'react';

function App() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        getMemes().then(setMemes);
    }, []);

    useEffect(() => {
        console.log(memes);
    }, [memes])

    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="gallery" element={<GalleryPage />} />

                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App