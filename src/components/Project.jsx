import { Link } from 'react-router-dom';

export default function Project({ title, description, image, url, github, tags }) {
    return (
        <>
            <div className="md:container 2xl:w-1/2 xl:w-3/4 l:w-1/4 m-8 mx-auto bg-[#e9e9e9] md:rounded-3xl shadow-sm">
                <h2 className='text-center text-3xl p-4'>{title}</h2>

                <Link to={url}><img src={image} alt="" /></Link>

                <div className='flex flex-row justify-center p-4'>
                    {tags.map((tag, index) => (
                        <h5 key={index} className='m-2 px-4 py-2 bg-[#9c9fc9] text-center inline rounded-md'>{tag}</h5>
                    ))}
                </div>
                <Link to={github}><button className='font-secondary py-2 px-6 m-2 rounded-lg bg-[#ffffff] hover:bg-[#888888] text-light-1 transition-all'>GitHub</button></Link>

            </div>
        </>
    );
}
