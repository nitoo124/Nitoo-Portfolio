import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import { FloatingNav } from '@/components/ui/FloatingNavbar'

function Page() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className=' max-w-7xl w-full mx-2'>
        <FloatingNav navItems={
          [{ name: "Home", link: "hero" },
          { name: "Projects", link: "projects" },
          { name: "Skills", link: "skills" },
          { name: "Experience", link: "experience" },
          { name: "Contact", link: "contact" }
          ]} />
        <Hero />
        <Project />
        <Skills />
        <Experience />
        <Contact />
        <Footer/>
      </div>



    </main>
  )
}

export default Page