import { Routes, Route } from "react-router";
import { Cities } from "../Cities/Cities";
import { Countries } from "../Countries/Countries";
import { Home } from "../Home/Home";


export const Router = () => {
    
    return (
        <>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/cities" element={<Cities/>} />
                <Route exact path="/countries" element={<Countries/>} />
            </Routes>
        </>
    );
}