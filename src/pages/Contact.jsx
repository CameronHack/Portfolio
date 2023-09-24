


export default function Contact() {
    return (
        <>
            <div className="md:container 2xl:w-1/2 xl:w-3/4 l:w-1/4 p-4 m-8 mx-auto bg-[#e9e9e9] md:rounded-3xl">

                <h2 className="font-main text-3xl text-center m-2">Contact Me</h2>

                <form className="form login-form flex flex-col justify-center items-center">

                    <input className="font-secondary form-input text-center p-2 m-2 focus:outline-none rounded-lg bg-light-1" type="text" id="name-input" placeholder="Name" />

                    <input className="font-secondary form-input text-center p-2 m-2 focus:outline-none rounded-lg bg-light-1" type="text" id="email-input" placeholder="Email" />

                    <textarea class="form-input font-secondary resize-none text-center p-4 m-2 h-40 w-full focus:outline-none rounded-lg bg-light-1" id="email-input" placeholder="Message"></textarea>

                    <button className="font-secondary py-2 px-6 m-2 rounded-lg bg-[#ffffff] hover:bg-[#888888] text-light-1 transition-all" type="submit">Submit</button>

                </form>

            </div>
        </>
    )
}    
