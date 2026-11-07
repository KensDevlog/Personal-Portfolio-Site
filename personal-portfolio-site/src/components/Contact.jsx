import './Contact.css'
import { socials, EMAIL } from '../data/socials'

export function Contact() {
    return (
        <footer id="contact" className="contact">
            <p className="contact__name">Ken Arigo</p>

            <div className="contact__info">
                <h2 className="contact__heading">Contact me</h2>
                <a className="contact__email" href={`mailto:${EMAIL}`}>{EMAIL}</a>

                <ul className="contact__links">
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
            </div>
        </footer>
    )
}

export default Contact