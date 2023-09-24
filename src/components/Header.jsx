import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className='p-4 text-lg text-blue-700'>
                <h1>Cameron Hack</h1>
            </header>
            <nav>
                <Link key={1} to="/">
                    Home
                </Link>
                <Link key={2} to="/aboutme">
                    About Me
                </Link>
                <Link key={3} to="/portfolio">
                    Portfolio
                </Link>
                <Link key={4} to="/contact">
                    Contact
                </Link>
                <Link key={5} to="/resume">
                    Resume
                </Link>
            </nav>
        </>
    );
}
