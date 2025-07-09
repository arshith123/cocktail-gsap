import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CockTail from './components/CockTail';

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <CockTail />
        </main>
    )
}

export default App