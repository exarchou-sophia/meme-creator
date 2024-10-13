import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css'

function App() {

    return (<Router>
        <NavBar />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </Router>

    )
}

export default App
