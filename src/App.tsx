import './App.sass'
import About from './blocks/About.tsx'
import Profile from './blocks/Profile.tsx'
import WorkExperience from './blocks/WorkExperience.tsx'
import Navbar from './navbar/Navbar.tsx'

function App() {

    return (
        <div className='App'>
            <Navbar />
            <Profile />
            <About />
            <WorkExperience />
        </div>
    )
}

export default App
