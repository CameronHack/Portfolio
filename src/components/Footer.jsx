import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="flex flex-row justify-center items-center p-8">
            <Link key={1} to="https://github.com/CameronHack" className='px-4'>GitHub</Link>
            <Link key={2} to="https://www.linkedin.com/in/cameron-hack-006baa292/" className='px-4'>LinkedIn</Link>
            </div>
        </>
    );
}
