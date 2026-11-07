import { useRef, useState } from 'react'

export default function ProjectCard({ title, still, video, onSelect }) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const start = () => {
        setPlaying(true)
        videoRef.current?.play().catch(() => { })
    }

    const stop = () => {
        setPlaying(false)
        const v = videoRef.current
        if (v) {
            v.pause()
            v.currentTime = 0
        }
    }

    return (
        <button
            className={`project-card ${playing ? 'is-playing' : ''}`}
            onClick={onSelect}
            onMouseEnter={start}
            onMouseLeave={stop}
            onFocus={start}
            onBlur={stop}
        >
            <img className="project-card__still" src={still} alt="" draggable={false} />
            <video
                ref={videoRef}
                className="project-card__video"
                src={video}
                muted
                loop
                playsInline
                preload="metadata"
            />
            <div className="project-card__footer">
                <span className="project-card__title">{title}</span>
                <span className="project-card__cta">Learn More</span>
            </div>
        </button>
    )
}