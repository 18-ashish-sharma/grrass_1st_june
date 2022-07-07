import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../pages/contact';
import Home from '../pages/home';


export default function Routings(){
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact/>} />
        </Routes>
    )
}