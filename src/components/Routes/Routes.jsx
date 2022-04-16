import { Routes, Route } from "react-router";
import { Cities } from "../Cities/Cities";
import { Countries } from "../Countries/Countries";
import { Home } from "../Home/Home";
import { Navbar } from "../Navbar/Navbar";


export const Router = () => {
    
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/add-city" element={<Cities/>} />
                <Route exact path="/add-country" element={<Countries/>} />
            </Routes>
        </>
    );
}