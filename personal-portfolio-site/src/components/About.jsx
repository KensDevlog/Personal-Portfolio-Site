import './About.css'
import portrait from '../assets/about/portrait.jpg' 

const roles = ['Software Engineer', 'UI Technical Artist', 'Gameplay Programmer']

export function About() {
    return (
        <section id="about">
            <h2 className="about__name">Ken Arigo</h2>

            <ul className="about__roles" aria-label="Roles">
                {roles.map((role) => (
                    <li key={role}>{role}</li>
                ))}
            </ul>

            <img className="about__photo" src={portrait} alt="Portrait of Ken Arigo" />

            <p className="about__bio">
                Hi, I'm Ken, a software engineer who enjoys solving interesting technical problems like
                building custom client-side prediction systems that mesh well with systems developed
                by cooperating engineers. I have experience making networked gameplay and UI systems,
                creating UI tech art, and working with multidisciplinary teams through a full
                production cycle. I'm always looking to add onto and improve my skills so that I can
                have a better impact on the projects I work on!
            </p>
        </section>
    )
}

export default About