import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Skill from './components/Skill'
import Projects from './components/Projects'
import { Footer } from './components/Footer'
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  NotepadTextDashed,
} from "lucide-react";

function App() {
  const socialLinks = [
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://x.com/Akmjot_singh",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/ekamjot-singh002/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/workofEKam/",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:ekamjotsing002@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="bg-black w-full ">
      {/* no fixed height or transforms here */}
      <Nav />
      <HeroSection />
      <Skill />
      <Projects />
      <Footer
        brandName="EKAMJOT"
        brandDescription="Building amazing web experiences with modern technologies. Passionate about creating intuitive and performant applications."
        socialLinks={socialLinks}
        creatorName="Ekamjot Singh"
        creatorUrl=""
        brandIcon={
          <a href='https://drive.google.com/file/d/1nS9j9befEz5o567KvbKIsH9mhKR1qJuI/view'><NotepadTextDashed className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg" /></a>
        }
      />
    </div>

  )
}

export default App
