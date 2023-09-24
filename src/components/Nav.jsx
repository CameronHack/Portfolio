import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="flex flex-row justify-around items-center">
                <Link key={1} to="/">About Me</Link>
                <Link key={2} to="/portfolio">Portfolio</Link>
                <Link key={3} to="/contact">Contact</Link>
                <Link key={4} to="/resume">Resume</Link>
            </nav>
        </>
    );
}
