import Image from "next/image"
import { projects } from "../../Data/projects"
import MagicButton from "./ui/MagicButton"

function ProjectsCard() {
  return (
    <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 py-8'>
      {projects.map((item, index) => (
        <div 
          key={index}
          className="relative overflow-hidden rounded-xl shadow-2xl border border-transparent bg-gradient-to-br from-gray-900/80 via-gray-900 to-gray-900/90 hover:border-purple-500/30 transition-all duration-500 group hover:shadow-[0_10px_30px_-15px_rgba(192,132,252,0.3)]"
        >
          {/* Image container with improved overlay */}
          <div className="relative h-60 w-full overflow-hidden">
            <Image 
              src={item.src}
              alt={item.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              placeholder="blur"
              blurDataURL="/placeholder.svg" // Add a small placeholder image
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content container */}
          <div className="p-6 relative z-10">
            {/* Title with gradient text */}
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-gray-100 mb-3">
              {item.title}
            </h2>
            
            {/* Description with better readability */}
            <p className="text-gray-300/90 mb-6 leading-relaxed line-clamp-3">
              {item.description}
            </p>
            
            {/* Button container with hover effect */}
            <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
              <a href={item.DemoURl} target="blank" className="inline-block w-full" aria-label={`View demo of ${item.title}`}>
                <MagicButton 
                  title='View Demo' 
                  icon={<span className="ml-2 transition-transform group-hover:translate-x-1">→</span>}
                />
              </a>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute -bottom-[1px] -left-[1px] -right-[1px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Background glow */}
          <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl -translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsCard