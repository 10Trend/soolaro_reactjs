const ContactUsForm = () => {
    return (
        <section className="container md:mt-14.5 mt-6 mb-12">
            <div className="w-full h-full bg-[#F6F6F6] md:rounded-[44px] p-8">
                <div>
                    <label htmlFor="name" className="text-[#0B0B0B] text-base font-semibold">
                        name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor="email" className="text-[#0B0B0B] text-base font-semibold">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor="message" className="text-[#0B0B0B] text-base font-semibold">
                        Message
                    </label>
                    <textarea
                        name="message"
                        className="w-full h-43.25 border border-[#DEDDDD] rounded-4xl mt-3"
                    ></textarea>
                </div>

                <button className="w-full h-14 bg-[#018884] rounded-4xl mt-6 text-[#FEFEFE] text-lg font-bold">
                    Send
                </button>
            </div>
        </section>
    )
}

export default ContactUsForm
