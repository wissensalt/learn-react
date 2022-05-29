import React from "react";
import {Home, About, Contact, Event, Error404, Services, CompanyHistory, Location} from "./Pages";
import {Routes, Route} from "react-router-dom";

function AppWithRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>}>
                    <Route path="services" element={<Services/>} />
                    <Route path="history" element={<CompanyHistory/>} />
                    <Route path="location" element={<Location/>} />
                </Route>
                <Route path="/event" element={<Event/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default AppWithRouter;