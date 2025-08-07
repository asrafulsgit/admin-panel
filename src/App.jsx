import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Asidebar from './components/Asidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    {/* <div className="flex min-h-screen"> 
      <Asidebar />
      <main className="flex-1 ">
        

        <section className='bg-[#F5F7FA] p-10'>
            <Home />
        </section>
      </main> 
      </div> */}

    <div className="flex min-h-screen">
        {/* Sidebar */}
         
        <Asidebar />
         

        {/* Main Content */}
        <main className="flex-1">
          {/* Fixed Navbar */}
          <header className="fixed top-0 left-[20%] right-0 z-40">
            <Navbar />
          </header>

          {/* Page content with padding top to avoid overlap */}
          <section className="bg-[#F5F7FA] p-10 pt-30 min-h-screen">
           <Home />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
