import { Link } from 'react-router-dom';

export default function Project({ title, description, image, url, github, tags }) {
    return (
        <>
            <div className="md:container 2xl:w-1/2 xl:w-3/4 l:w-1/4 m-8 mx-auto bg-light-2 md:rounded-xl shadow-sm">
                <h2 className='font-main text-text-light text-center text-3xl p-4'>{title}</h2>

                <img src={image} alt="" />

                {/* tags */}
                <div className='flex flex-col md:flex-row justify-center p-2 bg-[#b3b3b300]'>
                    {tags.map((tag, index) => (
                        <h5 key={index} className='font-secondary mx-4 my-1 text-center inline text-primary'>{tag}</h5>
                    ))}
                </div>

                <div className='flex flex-row justify-center py-4'>
                <Link to={github} target="_blank" rel="noopener noreferrer"><button className='font-secondary text-primary hover:text-secondary py-2 px-6 mx-2 rounded-lg transition-all duration-300 border-2 border-primary hover:border-secondary'>GitHub</button></Link>
                <Link to={url} target="_blank" rel="noopener noreferrer"><button className='font-secondary text-primary hover:text-secondary py-2 px-6 mx-2 rounded-lg transition-all duration-300 border-2 border-primary hover:border-secondary'>Live Site</button></Link>
                </div>

            </div>
        </>
    );
}
