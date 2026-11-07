import { techIcons } from './techIcons'

export default function ExperienceCard({ title, roles, dates, tech }) {
    return (
        <article className="experience-card">
            <div className="experience-card__main">
                <h3 className="experience-card__title">{title}</h3>
                <ul className="experience-card__roles" aria-label="Roles">
                    {roles.map((role) => (
                        <li key={role}>{role}</li>
                    ))}
                </ul>
            </div>

            <div className="experience-card__side">
                <span className="experience-card__dates">{dates}</span>
                <ul className="experience-card__tech" aria-label="Technologies used">
                    {tech.map((key) => {
                        const entry = techIcons[key]
                        if (!entry) return null
                        const { Icon, label, color } = entry
                        return (
                            <li key={key} title={label}>
                                <Icon size={36} color={color ?? 'default'} aria-label={label} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </article>
    )
}