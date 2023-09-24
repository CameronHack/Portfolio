import Project from '../components/Project';
import projects from '../utils/projects';

console.log(projects)

export default function Portfolio() {
    return (
        <>
            {projects.map((project) => (
                <Project key={project.id} title={project.title} description={project.description} image={project.image} url={project.url} github={project.github} tags={project.tags} />
            ))}
        </>
    )
}    
