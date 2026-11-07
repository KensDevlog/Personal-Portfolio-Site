import './Experience.css'
import ExperienceCard from './subcomponents/ExperienceCard'
import { experience } from '../data/experience'

export function Experience() {
    return (
        <section id="experience">
            <h2 className="experience__heading">EXPERIENCE</h2>
            <div className="experience__list">
                {experience.map((item) => (
                    <ExperienceCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Experience