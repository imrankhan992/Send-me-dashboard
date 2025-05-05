import { motion } from 'framer-motion'

const MainContent = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto bg-[#FDF8F3]">
      <motion.div 
        className="max-w-5xl w-full md:mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </main>
  )
}

export default MainContent