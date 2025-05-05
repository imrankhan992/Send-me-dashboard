import { FiFile, FiFolder, FiMonitor, FiEye, FiFileText } from 'react-icons/fi'
import { motion } from 'framer-motion'

const UploadMethodSelector = ({ selectedMethod, onSelectMethod }) => {
  const methods = [
    { id: 'text', label: 'Text', icon: <FiFileText className="h-8 w-8" /> },
    { id: 'file', label: 'File', icon: <FiFile className="h-8 w-8" /> },
    { id: 'folder', label: 'Folder', icon: <FiFolder className="h-8 w-8" /> },
    { id: 'software', label: 'Software Integration', icon: <FiMonitor className="h-8 w-8" /> },
    { id: 'wearable', label: 'Wearable Integration', icon: <FiEye className="h-8 w-8" /> },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {methods.map((method) => (
        <div 
          key={method.id}
          onClick={() => onSelectMethod(method.id)}
          className={`upload-method-card ${selectedMethod === method.id ? 'active' : ''}`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {method.icon}
            <span className="mt-2 text-sm font-medium text-center">{method.label}</span>
          </motion.div>
          {selectedMethod === method.id && (
            <motion.div 
              className="absolute bottom-1.5 left-0 right-0 mx-auto w-1.5 h-1.5 rounded-full bg-primary-600"
              layoutId="activeIndicator"
              transition={{ type: "spring", bounce: 0.2 }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default UploadMethodSelector