import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section id="contact" className='py-20 px-4 relative flex flex-col justify-center items-center'>
            <h2 className="text-5xl font-bold p-3 mb-10 bg-clip-text text-transparent bg-gradient-to-r
       from-purple-300  to-purple-700 ">
                Contact Me
            </h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {/* Email */}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=neetunagdev258@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"

                    className="group flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                    <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                        <IoMailOutline size={25} className="text-purple-300" />
                    </div>
                    <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-muted-foreground group-hover:text-purple-200 transition-colors">
                            neetunagdev258@gmail.com
                        </p>
                    </div>
                </a>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/03340399606"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                    <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                        <FaWhatsapp size={25} className="text-green-400" />
                    </div>
                    <div>
                        <h4 className="font-medium text-white">WhatsApp</h4>
                        <p className="text-muted-foreground group-hover:text-green-200 transition-colors">
                            +92 334 0399606
                        </p>
                    </div>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/nitoo-kumari-97b3b5247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                    <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <FaLinkedin size={25} className="text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-medium text-white">LinkedIn</h4>
                        <p className="text-muted-foreground group-hover:text-blue-200 transition-colors">
                            linkedin.com/in/Nitookumari
                        </p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Contact