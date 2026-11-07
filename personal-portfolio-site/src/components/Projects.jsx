import { useCallback, useState } from 'react'
import './Projects.css'
import ProjectCard from './subcomponents/ProjectCard'
import ProjectOverlay from './subcomponents/ProjectOverlay'
import { projects } from '../data/projects'

export function Projects() {
    const [selectedId, setSelectedId] = useState(null)
    const close = useCallback(() => setSelectedId(null), [])
    const selected = projects.find((p) => p.id === selectedId)

    return (
        <section id="projects">
            <h2 className="projects__heading">PROJECTS</h2>
            <div className="projects__scroller">
                {projects.map((p) => (
                    <ProjectCard
                        key={p.id}
                        title={p.title}
                        still={p.still}
                        video={p.video}
                        onSelect={() => setSelectedId(p.id)}
                    />
                ))}
            </div>

            {selected && <ProjectOverlay project={selected} onClose={close} />}
        </section>
    )
}

export default Projects