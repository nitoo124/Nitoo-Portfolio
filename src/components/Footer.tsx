import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

function Footer() {
  return (
    <footer className="relative border-t border-white/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:flex md:justify-between gap-8 mb-8">
          {/* About section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r
       from-purple-300  to-purple-700 mb-10">
              Nitoo kumari
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer creating modern web experiences with cutting-edge technologies.
            </p>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
            <div className="flex ju space-x-4">
              <a 
                href="https://github.com/nitoo124" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5  transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-muted-foreground hover:text-purple-700 transition-colors" />
              </a>
              <a 
                href="https://x.com/NagdevNeetu?t=yp3vf7UIdA0uWIARiVq3Xw&s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl text-muted-foreground hover:text-purple-700 transition-colors" />
              </a>
             
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <IoMdHeart className="mx-1 text-purple-200" /> by Nitoo Kumari
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-pink-500/20 rounded-full filter blur-xl"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;