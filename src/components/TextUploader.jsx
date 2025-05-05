import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'

const TextUploader = () => {
  const [text, setText] = useState('')
  const [memories, setMemories] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!text.trim()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Add to memories
    setMemories([...memories, text])
    setText('')
    setIsSubmitting(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative">
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 min-h-[200px] pr-14 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={!text.trim() || isSubmitting}
            className={`absolute bottom-4 right-4 p-2 rounded-full ${
              text.trim() && !isSubmitting 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiSend className="h-5 w-5" />
          </motion.button>
        </div>
      </form>
      
      {memories.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-medium">Submitted Memories</h4>
          {memories.map((memory, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-gray-50 rounded-lg"
            >
              {memory}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TextUploader