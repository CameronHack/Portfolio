import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="flex flex-row justify-center items-center py-12">
            <Link key={1} to="https://github.com/CameronHack" target="_blank" rel="noopener noreferrer">
                <button className='font-secondary mx-8 text-text-light border-b-2 border-light-1 hover:border-primary transition-all duration-500'>GitHub</button>
            </Link>
            <Link key={2} to="https://www.linkedin.com/in/cameronhack/" target="_blank" rel="noopener noreferrer">
                <button className='font-secondary mx-8 text-text-light border-b-2 border-light-1 hover:border-primary transition-all duration-500'>LinkedIn</button>
            </Link>
            <Link key={3} to="https://stackoverflow.com/users/22640541/cameron-hack" target="_blank" rel="noopener noreferrer">
                <button className='font-secondary mx-8 text-text-light border-b-2 border-light-1 hover:border-primary transition-all duration-500'>Stack Overflow</button>
            </Link>
            </div>
        </>
    );
}
