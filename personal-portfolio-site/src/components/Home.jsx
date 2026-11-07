import { useEffect, useRef } from 'react'
import './Home.css'
import HorizontalButtonList from './subcomponents/HorizontalButtonList'
import homeReel from '../assets/home-reel.mp4'

export function Home() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        let ticking = false

        const update = () => {
            const h = section.offsetHeight
            const y = Math.min(Math.max(window.scrollY, 0), h)

            section.style.setProperty('--video-shift', `${y * 0.4}px`)
            section.style.setProperty('--text-shift', `${y * 0.2}px`)
            section.style.setProperty('--text-opacity', Math.max(0, 1 - (y / h) * 1.5).toFixed(3))
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                ticking = true
                requestAnimationFrame(update)
            }
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <section id="home" ref={sectionRef}>
            <h1 className="home__name">KEN ARIGO</h1>
            <h2 className="home__role">Software Engineer</h2>
            <HorizontalButtonList />
            <div className="home__video-frame">
                <video className="home__video" autoPlay loop muted playsInline>
                    <source src={homeReel} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Home