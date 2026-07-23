import React from 'react';
import { Mail } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import LinkedinIcon from '../../assets/linkedin.svg?react';

const buttonList = [
    { id: 'github', label: 'GitHub', icon: SiGithub, onClick: () => window.open('https://github.com/KensDevlog') },
    { id: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, onClick: () => window.open('https://linkedin.com/in/ken-arigo') },
    { id: 'contact', label: 'Contact', icon: Mail, onClick: () => window.location.href = 'mailto:kenarigo@yahoo.com' },
];

export default function HorizontalButtonList() {
    return (
        <div style={styles.container}>
            {buttonList.map(({ id, label, icon: IconComponent, onClick }) => (
                <button key={id} onClick={onClick} style={styles.button}>
                    <IconComponent width={18} height={18} />
                    <span>{label}</span>
                </button>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 16px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        backgroundColor: '#ffffff',
        color: '#0f172a',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
};