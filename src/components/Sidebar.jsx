import { useState } from 'react'
import { FiSettings, FiPlayCircle, FiGrid, FiFilePlus, FiUpload, FiFileText, FiBookOpen, FiTool, FiChevronDown, FiChevronUp, FiX, FiTrash, FiTrash2 } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar = ({ open , setOpen }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen)
  }

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-20 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed md:sticky top-0 left-0 z-30 h-screen w-96 md:w-72 bg-[#FEFCFA]  border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial={false}
        style={{ height:"100vh" }}
      >
        <div className="flex flex-col h-screen ">
          {/* close menu button */}
          <div className="flex absolute items-center right-0 top-2  justify-end p-4 md:hidden">
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
          {/* User profile */}
          <div className="p-4 border-b border-gray-200   flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-semibold shadow-[-3px_7px_16px_-14px_rgba(0,_0,_0,_0.8)]">
                V
              </div>
              <div className=''>
                <h3 className="text-base font-semibold">Vivek</h3>
              </div>
            </div>
          </div>
          
          {/* Sidebar navigation */}
          <nav className="flex flex-col h-full px-2 py-4 justify-between space-y-1 overflow-y-auto bg-[#FEFCFA] ">
        <div>
        <div className="mb-4">
              <div className="relative">
                <button 
                  onClick={toggleSubmenu}
                  className="w-full text-left nav-link active group flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <FiSettings className="h-5 w-5" />
                    <span className="flex-1">Create Second Me</span>
                  </div>
                  {isSubmenuOpen ? (
                    <FiChevronUp className="h-4 w-4" />
                  ) : (
                    <FiChevronDown className="h-4 w-4" />
                  )}
                </button>
                
                <AnimatePresence>
                  {isSubmenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 ml-4 pl-4 border-l-2 border-gray-200 space-y-1 overflow-hidden"
                    >
                      <a href="#" className="block text-sm py-1.5 pl-1 text-gray-500 hover:text-primary-600 transition-colors">
                        Define Your Identity
                      </a>
                      <a href="#" className="block text-sm py-1.5 pl-1 text-primary-600 font-medium">
                        Upload Your Memory
                      </a>
                      <a href="#" className="block text-sm py-1.5 pl-1 text-gray-500 hover:text-primary-600 transition-colors">
                        Train Second Me
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <a href="#" className="nav-link">
              <FiGrid className="h-5 w-5" />
              <span>Playground</span>
            </a>
            
            <a href="#" className="nav-link">
              <FiFilePlus className="h-5 w-5" />
              <span>Second Me Services</span>
            </a>

            <div className="border-t border-gray-200 pt-4 mt-4"></div>
            
        </div>
          <div className='pb-16 '>
          <a href="#" className="nav-link ">
              <FiBookOpen className="h-5 w-5" />
              <span>Tutorial</span>
            </a>
            
            <a href="#" className="nav-link ">
              <FiTool className="h-5 w-5" />
              <span>Support Model Config</span>
            </a>
            <a href="#" className="nav-link text-red-500">
              <FiTrash2 className="h-5 w-5" />
              <span>Delete Second Me</span>
            </a>
          </div>
          </nav>
        </div>
      </motion.aside>
    </>
  )
}

export default Sidebar