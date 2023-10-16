import Project from '../components/Project';
import projects from '../utils/projects';
import { motion, AnimatePresence } from "framer-motion"

console.log(projects)

export default function Portfolio() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { ease: "easeOut", duration: 0.6 } }}
                exit={{ opacity: 0, transition: { ease: "easeIn", duration: 0.6 } }}>

                {projects.map((project) => (
                    <Project key={project.id} title={project.title} description={project.description} image={project.image} url={project.url} github={project.github} tags={project.tags} />
                ))}

            </motion.div>
        </>
    )
}    
