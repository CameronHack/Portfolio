import photo from '/src/assets/photo.png';
import CHLogo from '/src/assets/CH.png';


export default function AboutMe() {
    return (
        <>
            <div className="md:container 2xl:w-2/3 xl:w-3/4 l:w-1/4 px-8 py-4 md:px-16 m-8 mx-auto md:rounded-xl shadow-sm">

                <img src={photo} alt="Portrait photo" className="xl:w-1/4 md:w-1/3 sm:w-1/2 rounded-full shadow-lg mx-auto" />

                {/* glow */}
                <div className="bg-primary w-80 h-80 rounded-full opacity-5 blur-3xl absolute z-[-1]" />
                <div className="bg-primary w-80 h-80 rounded-full opacity-5 blur-3xl absolute z-[-1] md:scale-150" />

                <p className="font-secondary text-text-light md:px-16 pt-8 text-xl">"I am a 23-year-old Full-Stack Web Developer from Zelienople, PA. My passion for all things technical has been a driving force in my life. Beyond my work life, I'm a relentless learner always striving to expand my skills and expertise as a developer. I find immense joy in the world of web development, and my journey has been nothing short of exhilarating. I'm committed to continuous growth and excellence in my craft." <br className='lg:hidden' /><span className='font-main text-primary'>- Cameron Hack</span></p>

                {/* bar below about me */}
                <div className="w-64 h-1 md:mx-16 mt-2 bg-gradient-to-r from-primary to-[#fff0] opacity-50" />

                <img src={CHLogo} className="md:w-20 w-1/5 pt-4 mx-auto" />

            </div>
        </>
    )
}    
