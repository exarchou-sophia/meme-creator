import './App.css'
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { GalleryPage } from "./pages/GalleryPage"

function App() {
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