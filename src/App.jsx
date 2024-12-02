import React, { useState, useEffect } from 'react';
import './App.css'
import NavBar from './components/navbar'
import FullWidthGrid from './components/overview'
import RecentProjects from './components/recent'
import Preloader from './components/loader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading time (e.g., fetching data)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 7000);
  }, []);


  return (
    <> 
     <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <NavBar />
     <br />
     <FullWidthGrid />
     <br />
     <RecentProjects />
        </div>
      )}
    </div>
     
    </>
  )
}

export default App
