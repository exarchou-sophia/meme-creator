import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { GalleryPage } from "./pages/GalleryPage"
import { useState } from 'react';
import { MemeContext } from "./context/MemeContext";

export const App = () => {
    const [memes, setMemes] = useState([]);
    const [previewMeme, setPreviewMeme] = useState();
    const [savedMemes, setSavedMemes] = useState([]);

    return (
        <MemeContext.Provider value={{
            previewMeme, setPreviewMeme,
            memes, setMemes,
            savedMemes, setSavedMemes,
        }}>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={<HomePage />}
                        />
                        <Route
                            path="gallery"
                            element={<GalleryPage />}
                        />

                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MemeContext.Provider>
    );
}

export default App