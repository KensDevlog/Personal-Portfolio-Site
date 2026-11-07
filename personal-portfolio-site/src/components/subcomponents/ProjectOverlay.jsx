import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { SiGithub, SiItchdotio } from '@icons-pack/react-simple-icons'
import './ProjectOverlay.css'

function Block({ block }) {
    if (block.type === 'image') {
        return (
            <figure
                className={`overlay-figure overlay-figure--${block.side ?? 'left'}`}
                style={block.width ? { width: block.width } : undefined}
            >
                <img src={block.src} alt={block.alt ?? ''} loading="lazy" />
                {block.caption && <figcaption>{block.caption}</figcaption>}
            </figure>
        )
    }
    return <p>{block.text}</p>
}

export default function ProjectOverlay({ project, onClose }) {
    const dialogRef = useRef(null)
    const bodyRef = useRef(null)
    const sectionRefs = useRef({})

    const sections = useMemo(
        () => (project.links?.itch ? [...project.sections, { id: 'download', title: 'Download' }] : project.sections),
        [project]
    )
    const [activeId, setActiveId] = useState(sections[0].id)

    useEffect(() => {
        const previouslyFocused = document.activeElement
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        dialogRef.current?.focus()
        return () => {
            document.body.style.overflow = previousOverflow
            previouslyFocused?.focus?.()
        }
    }, [])

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose()
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [onClose])

    const updateActive = useCallback(() => {
        const body = bodyRef.current
        if (!body) return
        const atBottom = body.scrollTop > 0 && body.scrollTop + body.clientHeight >= body.scrollHeight - 4
        if (atBottom) {
            setActiveId(sections[sections.length - 1].id)
            return
        }
        let current = sections[0].id
        for (const s of sections) {
            const el = sectionRefs.current[s.id]
            if (el && el.offsetTop - 24 <= body.scrollTop) current = s.id
        }
        setActiveId(current)
    }, [sections])

    const jumpTo = (id) => {
        const el = sectionRefs.current[id]
        bodyRef.current?.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        setActiveId(id)
    }

    return createPortal(
        <div
            className="overlay"
            onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
            <div
                className="overlay__card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="overlay-title"
                tabIndex={-1}
                ref={dialogRef}
            >
                <header className="overlay__header">
                    <h2 id="overlay-title" className="overlay__title">{project.title}</h2>
                    <div className="overlay__links">
                        {project.links?.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} title="GitHub">
                                <SiGithub size={32} />
                            </a>
                        )}
                        {project.links?.itch && (
                            <a href={project.links.itch} target="_blank" rel="noopener noreferrer" aria-label={`Download ${project.title} on itch.io`} title="itch.io">
                                <SiItchdotio size={32} color="#fa5c5c" />
                            </a>
                        )}
                    </div>
                </header>

                <div className="overlay__content">
                    <div className="overlay__body" ref={bodyRef} onScroll={updateActive}>
                        {sections.map((s) => (
                            <section key={s.id} className="overlay__section" ref={(el) => (sectionRefs.current[s.id] = el)}>
                                <h3>{s.title}</h3>
                                {s.id === 'download' ? (
                                    <a className="overlay__download" href={project.links.itch} target="_blank" rel="noopener noreferrer">
                                        Get {project.title} on itch.io
                                    </a>
                                ) : (
                                    s.content.map((block, i) => <Block key={i} block={block} />)
                                )}
                            </section>
                        ))}
                    </div>

                    <nav className="overlay__nav" aria-label="Sections">
                        {sections.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => jumpTo(s.id)}
                                aria-current={activeId === s.id ? 'true' : undefined}
                            >
                                {s.title}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>,
        document.body
    )
}