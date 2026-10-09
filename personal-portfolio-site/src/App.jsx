import { useState } from 'react'
import Home from './components/Home.1'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Home />
            <Projects />
            <About />
            <Experience />
            <Contact />

            <section id="spacer"></section>
        </>
    )
}

export default App
