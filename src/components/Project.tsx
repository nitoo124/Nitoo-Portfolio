import React from 'react'
import ProjectsCard from './ProjectsCard'

function Project() {
  return (
    <div id='projects' className=' flex flex-col items-center justify-center py-20'>
      <h2 className='text-5xl p-3 font-bold bg-clip-text text-transparent bg-gradient-to-r
       from-purple-300  to-purple-700  mb-10'>
        My projects
      </h2>


      <ProjectsCard />




    </div>
  )
}

export default Project
