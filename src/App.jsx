import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { GalleryPage } from "./pages/GalleryPage"
import { getMemes } from './components/api';
import { useState, useEffect } from 'react';

export const App = () => {
    const [memes, setMemes] = useState([]);
    const [userSearchInput, setUserSearchInput] = useState("");
    const [filteredMemes, setFilteredMemes] = useState([]);

    useEffect(() => {
        getMemes().then(setMemes);
    }, []);

    useEffect(() => {
        console.log("memes", memes);
    }, [memes])

    useEffect(() => {
        console.log("userSearchInput!", userSearchInput);

        setFilteredMemes(memes.filter(({ name }) =>
            name.toLowerCase().includes(userSearchInput.toLowerCase())
        ))
    }, [userSearchInput])

    useEffect(() => {
        console.log(filteredMemes)
    }, [filteredMemes])

    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <HomePage
                                onSearchInputChanged={setUserSearchInput}
                                onSearchClicked={() => console.log("user clicked search button")}
                            />
                        }
                    />
                    <Route path="gallery" element={<GalleryPage />} />

                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App