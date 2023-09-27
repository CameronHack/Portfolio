


export default function AboutMe() {
    return (
        <>
            <div className="md:container 2xl:w-2/3 xl:w-3/4 l:w-1/4 px-8 py-4 md:px-16 m-8 mx-auto md:rounded-xl shadow-sm">

                <img src="./src/assets/photo.png" alt="Portrait photo" className="xl:w-1/4 md:w-1/3 sm:w-1/2 rounded-full shadow-lg mx-auto" />

                {/* glow */}
                <div className="bg-primary w-80 h-80 rounded-full opacity-10 blur-3xl absolute z-[-1]" />

                <p className="font-secondary text-text-light md:px-16 pt-8 text-xl">I am a 23-year-old Full Stack Web Developer from Zelienople, PA. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quaerat praesentium assumenda deserunt? Perspiciatis eos tempora adipisci nulla alias error totam consectetur, optio iure facilis reprehenderit corporis, vel aut natus!
                Sequi nostrum similique minima suscipit commodi tenetur quasi harum explicabo! Quidem velit laboriosam vel doloremque ducimus quisquam cumque minima dolore odio, ipsam dolores libero adipisci quod corrupti error iure alias.</p>

                {/* bar below about me */}
                <div className="w-64 h-1 md:mx-16 mt-2 bg-gradient-to-r from-primary to-[#fff0] opacity-50" />

                <img src="./src/assets/CH.png" className="md:w-20 w-1/5 pt-4 mx-auto" />

            </div>
        </>
    )
}    
