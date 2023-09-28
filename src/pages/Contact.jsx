

export default function Contact() {
    return (
        <>
            <div className="md:container 2xl:w-1/2 xl:w-3/4 l:w-1/4 p-4 m-8 mx-auto bg-light-2 md:rounded-3xl shadow-sm">

                <h2 className="font-main text-text-light text-3xl text-center p-4">Contact Me</h2>

                <form className="form contact-form flex flex-col justify-center items-center">

                    <input
                        className="font-secondary text-text-light form-input text-center p-2 m-2 w-3/4 focus:outline-none rounded-lg bg-light-1"
                        type="text"
                        id="name-input"
                        placeholder="Name"
                        required
                    />

                    <input
                        className="font-secondary text-text-light form-input text-center p-2 m-2 w-3/4 focus:outline-none rounded-lg bg-light-1"
                        type="text"
                        id="email-input"
                        placeholder="Email"
                        required
                    />

                    <textarea
                        className="form-input font-secondary text-text-light resize-none text-center p-4 m-2 h-40 w-3/4 focus:outline-none rounded-lg bg-light-1"
                        id="message-input"
                        placeholder="Message"
                        required
                    />

                    <button className="font-secondary text-primary hover:text-secondary py-2 px-6 m-2 rounded-lg transition-all duration-300 border-2 border-primary hover:border-secondary" type="submit">Submit</button>
                </form>

                {/* temp delete later */}
                <div className="p-4">
                    <p className="text-red-400 text-xl text-center">Form under construction for now you can contact me using the following 🙂</p>
                    <p className="text-red-400 text-xl text-center">camhack67@gmail.com</p>
                    <p className="text-red-400 text-xl text-center">(724)-841-4937</p>
                </div>
            </div>
        </>
    )
}    
