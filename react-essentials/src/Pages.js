import {Link, useLocation, Outlet} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="event">Event</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function Event() {
    return (
        <div>
            <h1>Event</h1>
        </div>
    )
}

export function About() {
    return (
        <div>
            <h1>About</h1>
            <Outlet />
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}

export function Services() {
    return (
        <div>
            <h1>Our Company Services</h1>
        </div>
    )
}

export function CompanyHistory() {
    return (
        <div>
            <h1>Our Company History</h1>
        </div>
    )
}

export function Location() {
    return (
        <div>
            <h1>Location</h1>
        </div>
    )
}

export function Error404() {
    let location = useLocation();
    return (
        <div>
            <h1>This page does not exist at {location.pathname}</h1>
        </div>
    )
}