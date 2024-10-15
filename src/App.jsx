import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { GalleryPage } from "./pages/GalleryPage"
import { act, useReducer, useState } from 'react';
import { MemeContext } from "./context/MemeContext";

const memePreviewReducer = (state, action) => {
    switch (action.type) {
        case "discard":
            return undefined
        case "save":
            return ({
                ...action.payload,
                topText: "",
                bottomText: "",
            })
        case "changeTopText":
            return ({
                ...state,
                topText: action.payload,
            })
        case "changeBottomText":
            return ({
                ...state,
                bottomText: action.payload,
            })
        default:
            throw Error('Unknown action.');
    }
}

export const App = () => {
    const [memes, setMemes] = useState([]);
    const [previewMeme, dispatch] = useReducer(memePreviewReducer, undefined)
    const [savedMemes, setSavedMemes] = useState([]);

    return (
        <MemeContext.Provider value={{
            previewMeme, dispatch,
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
    )
}

export default App;