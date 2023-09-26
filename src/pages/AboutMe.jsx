


export default function AboutMe() {
    return (
        <>
            <div className="md:container 2xl:w-2/3 xl:w-3/4 l:w-1/4 p-8 md:p-16 m-8 mx-auto md:rounded-xl shadow-sm">

                <div>
                <img src="./src/assets/photo.png" alt="Portrait photo" className="xl:w-1/4 md:w-1/3 sm:w-1/2 rounded-full shadow-lg mx-auto" />
                </div>
                {/* glow */}
                <div className="bg-primary w-80 h-80 rounded-full opacity-10 blur-3xl absolute z-[-1]"/>

                <p className="font-secondary text-text-light md:px-16 pt-8 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores amet illum id corrupti veniam! Magni eos obcaecati dolores natus blanditiis odio. Delectus nihil quas eligendi a, placeat voluptatum vitae nostrum!
                Quo porro earum facere, fugit nisi cupiditate iste illum voluptas architecto qui ipsum dignissimos! Numquam architecto, facere fuga inventore adipisci ullam nesciunt dignissimos aspernatur eos eius officia sed nobis totam.
                Nesciunt perferendis earum quas dignissimos? Corrupti ipsum, blanditiis, libero ipsam molestiae quaerat quisquam velit, perferendis voluptatem mollitia unde cum laborum ullam rem assumenda sequi amet quasi vitae cupiditate suscipit ratione!</p>

            {/* bar below about me */}
            <div className="w-64 h-1 md:mx-16 mt-2 bg-gradient-to-r from-primary to-[#fff0]"/>

            <img src="./src/assets/CH.png" className="md:w-20 w-1/5 pt-4 mx-auto" />

            </div>
        </>
    )
}    
