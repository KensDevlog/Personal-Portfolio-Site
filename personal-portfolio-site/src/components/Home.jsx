import '../App.css'
import HorizontalButtonList from './subcomponents/HorizontalButtonList'
import homeReel from '../assets/home-reel.mp4'

export function Home() {
    return (
        <>
            <section id="center">
                <h1>Ken Arigo</h1>
                <h2>SOFTWARE ENGINEER</h2>
                <HorizontalButtonList />
                <div className="video-container">
                    <video autoPlay loop muted playsInline>
                        <source src={homeReel} type="video/mp4"></source>
                    </video>
                </div>
            </section>
        </>
    );
}


export default Home

