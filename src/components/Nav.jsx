import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="flex flex-row justify-around items-center">
                <Link key={1} to="/"><button className='font-secondary border-b-2 border-light-1 hover:border-primary transition-all duration-500'>About Me</button></Link>
                <Link key={2} to="/portfolio"><button className='font-secondary border-b-2 border-light-1 hover:border-primary transition-all duration-500'>Portfolio</button></Link>
                <Link key={3} to="/contact"><button className='font-secondary border-b-2 border-light-1 hover:border-primary transition-all duration-500'>Contact</button></Link>
                <Link key={4} to="/resume"><button className='font-secondary border-b-2 border-light-1 hover:border-primary transition-all duration-500'>Resume</button></Link>
            </nav>
        </>
    );
}
