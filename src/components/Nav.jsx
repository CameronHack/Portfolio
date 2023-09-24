import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav>
                <Link key={1} to="/">Home</Link>
                <Link key={2} to="/aboutme">About Me</Link>
                <Link key={3} to="/portfolio">Portfolio</Link>
                <Link key={4} to="/contact">Contact</Link>
                <Link key={5} to="/resume">Resume</Link>
            </nav>
        </>
    );
}
