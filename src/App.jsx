import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import UploadMemories from './components/UploadMemories'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div style={{ height:"100vh"}} className="h-screen  flex flex-col">
    <Header toggleSidebar={toggleSidebar} />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <MainContent>
        <UploadMemories />
      </MainContent>
    </div>
  </div>
  )
}

export default App