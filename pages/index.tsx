// pages/index.tsx
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
// import other components...

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}