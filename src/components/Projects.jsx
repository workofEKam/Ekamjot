import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';


const projectsData = [
  {
    id: 1,
    title: "Real Time Notes Sync",
    more : "Collaborative notes application featuring instant synchronization using Firebase Firestore database",
    description:
      "A responsive React application providing room-based organization for users to create and manage shared digital content.",
    backgroundImage: '/src/assets/notes.png',
    link: "https://workofekam.github.io/NotesTaking/",
  },
  {
    id: 2,
    title: "CSE Faculty Bibliometric Analysis",
    more : "Systematic research productivity analysis using data extracted from Google Scholar.",
    description:
      "This project employs first principles to visualize temporal trends and thematic focus in computer science publications.",
    backgroundImage: "/src/assets/DVPD.png",
    link: "https://github.com/workofEKam/DATA_visualization",
  },
];

function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section id="projects" className="relative bg-white">
        <div className="flex items-center justify-center tracking-widest pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 relative top-4 sm:top-6 md:top-10 px-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#6d6c6c] via-[#f4f3f3] to-[#ffffff]">
            Projects
          </h1>
        </div>
      </section>

      <section ref={containerRef} className="relative -top-4 sm:-top-6 md:-top-10 bg-white">
        {projectsData.map((project, index) => {
          const zIndex = projectsData.length + index;
          const totalCards = projectsData.length;
          const cardStart = index / totalCards;
          const cardEnd = (index + 1) / totalCards;

          const scale = useTransform(scrollYProgress, [cardStart, cardEnd], [1, 0.85]);

          return (
            <div
              key={project.id}
              className="sticky top-4 sm:top-6 md:top-10 h-screen w-full px-2 sm:px-4 md:px-0"
              style={{ zIndex }}
            >
              <motion.div
                className="relative h-full w-full rounded-2xl sm:rounded-3xl md:rounded-4xl bg-cover bg-center bg-no-repeat shadow-2xl overflow-hidden"
                style={{
                  scale,
                  backgroundImage: `url(${project.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transformOrigin: "center top",
                  willChange: "transform",
                }}
              >
                <div className="absolute inset-0 bg-black/50 rounded-2xl sm:rounded-3xl md:rounded-4xl"></div>

                <div className="relative h-full flex flex-col justify-between pb-6 sm:pb-8 md:pb-10 lg:pr-10 text-white px-4 sm:px-6 md:px-10 lg:px-16">
                  {/* Description at top */}
                  <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-gray-200 urbanist pt-6 sm:pt-8 md:pt-10 max-w-full sm:max-w-xl md:max-w-2xl">
                    {project.description}
                  </h1>
                  
                  {/* More info in middle/bottom area */}
                  <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                    <h1 className='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-gray-200 urbanist max-w-full sm:max-w-xs md:max-w-sm ml-auto text-right'>
                      {project.more}
                    </h1>
                    
                    {/* Project title at bottom */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[4.7rem] font-semibold urbanist-bold leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
                      <a href={project.link} className="hover:underline">{project.title}</a>
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Projects;
