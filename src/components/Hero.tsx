import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerteEffect'
import MagicButton from './ui/MagicButton'
import { cn } from '../../lib/utils'
import { MdFileDownload } from "react-icons/md";


function Hero() {

  
    return (
        <div id='hero' className='pb-20 pt-36 overflow-hidden '>
            {/* Spotlights with better positioning and intensity */}
            <div className="absolute inset-0">
                {/* Main White Spotlight (strongest) */}
                <Spotlight
                    className="absolute -top-20 -left-20 h-[120vh] w-[120vw] md:-top-40 md:-left-40"
                    fill="white"
                />

                {/* Purple Spotlight (right side) */}
                <Spotlight
                    className="absolute top-1/4 -right-10 h-[80vh] w-[60vw] md:-right-20"
                    fill="rgba(192, 132, 252, 0.8)"
                />

                {/* Blue Spotlight (bottom center) */}
                <Spotlight
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[60vh] w-[90vw]"
                    fill="rgba(96, 165, 250, 0.7)"
                />
            </div>

            {/*bacground grid  */}
            <div className="relative flex w-full items-center justify-center bg-black dark:bg-black">
                <div
                    className={cn(
                        "absolute ",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}

                <div className='flex flex-col justify-center gap-3 items-center text-center p-8 '>
                    <TextGenerateEffect
                        className=' font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r
       from-purple-300  to-purple-700 mb-10  '
                        words=' Welcome To My Portfolio '
                        duration={0.5} />
                    <p className='text-xl text-gray-200 '> Passionate and results-driven Front-End Developer with hands-on experience in HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, Framer Motion, ShadCN, and MongoDB. Skilled at building responsive, interactive, and scalable web applications using modern frameworks, database management, and design practices.
                    </p>
                </div>
            </div>

            {/* button */}
         <a href="/NitooResume.pdf" download={""}>
         <div className=' flex justify-center'>
           <MagicButton title='Download cv' icon={<MdFileDownload size={27} className='mt-2 text-gray-100'
           />} />
           </div>
         </a>
        </div>
    )
}

export default Hero
