"use client";
import Image from "next/image";
import { projects } from "../../Data/projects";
import { motion } from "framer-motion";

function ProjectsCard() {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 py-10">
      {projects.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay: index * 0.2,
          }}
          className="your-classes"
        >


          {/* Image section */}
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={item.src}
              alt={item.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              placeholder="blur"
              blurDataURL="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content section */}
          <div className="p-6 relative z-10">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-gray-100 mb-2">
              {item.title}
            </h2>

            <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
              {item.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-800/20 text-purple-100 text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex md:flex-row flex-col gap-4 mt-4">
              {/* View Demo */}
              <motion.a
                href={item.DemoURl}
                target="_blank"
                whileHover={{ y: -2 }}
                className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-purple-700 text-white font-medium shadow-md hover:shadow-lg transition"
              >
                View Demo →
              </motion.a>

              {/* GitHub */}
              <motion.a
                href={item.githubUrl}
                target="_blank"
                whileHover={{ y: -2 }}
                className="flex-1 text-center px-4 py-2 rounded-lg bg-white text-gray-900 font-medium shadow-md hover:shadow-lg transition border border-gray-300"
              >
                GitHub ↗
              </motion.a>
            </div>
          </div>

          {/* Glowing background effect */}
          <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl -translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectsCard;
