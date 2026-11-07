import './HorizontalButtonList.css'
import { socials } from '../../data/socials'

export default function HorizontalButtonList() {
    return (
        <ul className="social-list">
            {socials.map(({ id, label, Icon, href, external }) => (
                <li key={id}>
                    <a
                        href={href}
                        aria-label={label}
                        title={label}
                        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                        <Icon />
                    </a>
                </li>
            ))}
        </ul>
    )
}