import { useEffect, useState } from "react"
import ProjectItem from "./ProjectItem"

export default function Projects() {
    const [projects, setProjects] = useState([]) 

    useEffect(() => {
        const fetchProjects = async () => {
            const result = await fetch('https://api.plamen-michev.com/wp-json/wp/v2/posts')
            const resultAsJson = await result.json()
            const resultAsObject = resultAsJson;

            setProjects(resultAsObject
                .map(obj => (
                    {
                        id: obj.id, 
                        link: obj.acf.link, 
                        description: obj.acf.description,
                        imageUrl: obj.acf['image-url'],
                        name: obj.title.rendered
                    })))
        }

        fetchProjects()
    }, [])
    
    return (
        <div className="projects-wrapper">
            {projects.map(project => <ProjectItem key={project.id} {...project} />)}
        </div>
    )
}