import { Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import LinkedinIcon from '../assets/linkedin.svg?react'

export const EMAIL = 'kenarigo@yahoo.com'

export const socials = [
    { id: 'github', label: 'GitHub', Icon: SiGithub, href: 'https://github.com/KensDevlog', external: true },
    { id: 'linkedin', label: 'LinkedIn', Icon: LinkedinIcon, href: 'https://linkedin.com/in/ken-arigo', external: true },
    { id: 'email', label: 'Email', Icon: Mail, href: `mailto:${EMAIL}`, external: false },
]