import React from 'react'
import ProjectsCard from './ProjectsCard'

function Project() {
  return (
    <div id='projects' className=' flex flex-col items-center justify-center py-20'>
      <h2 className='text-5xl p-3 font-bold text-transparent mb-10 bg-clip-text bg-gradient-to-br from-purple-300 to-gray-100'>
        My projects
      </h2>


      <ProjectsCard />




    </div>
  )
}

export default Project
