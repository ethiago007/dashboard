import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import FullWidthGrid from './components/overview'
import RecentProjects from './components/recent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     <NavBar />
     <br />
     <FullWidthGrid />
     <br />
     <RecentProjects />
    </>
  )
}

export default App
