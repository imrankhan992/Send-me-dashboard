import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiInfo, FiFile, FiFolder, FiMonitor, FiEye } from 'react-icons/fi'
import UploadMethodSelector from './UploadMethodSelector'
import TextUploader from './TextUploader'

const UploadMemories = () => {
  const [uploadMethod, setUploadMethod] = useState('text')
  
  const handleUploadMethodChange = (method) => {
    setUploadMethod(method)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Upload Memories</h1>
        <p className="text-gray-600 leading-relaxed">
          Upload content that helps your AI understand you better. These aren't just files—they're experiences 
          and ideas for your Second Me to live through. By processing these memories, your AI learns to see 
          the world as you do, adopting your unique perspective and decision-making patterns.
        </p>
      </div>
      
      <motion.div 
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg font-semibold">Upload Memories</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <FiInfo className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-base font-medium mb-4">Upload Method</h3>
            <UploadMethodSelector 
              selectedMethod={uploadMethod}
              onSelectMethod={handleUploadMethodChange}
            />
          </div>
          
          <div>
            {uploadMethod === 'text' && <TextUploader />}
            {uploadMethod === 'file' && <FileUploadPlaceholder />}
            {uploadMethod === 'folder' && <FolderUploadPlaceholder />}
            {uploadMethod === 'software' && <SoftwareIntegrationPlaceholder />}
            {uploadMethod === 'wearable' && <WearableIntegrationPlaceholder />}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const FileUploadPlaceholder = () => (
  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
    <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
      <FiFile className="h-6 w-6 text-blue-500" />
    </div>
    <h3 className="text-lg font-medium mb-2">Drop your files here</h3>
    <p className="text-gray-500 mb-4">or click to browse</p>
    <button className="btn btn-primary">Select Files</button>
  </div>
)

const FolderUploadPlaceholder = () => (
  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
    <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4">
      <FiFolder className="h-6 w-6 text-indigo-500" />
    </div>
    <h3 className="text-lg font-medium mb-2">Select a folder to upload</h3>
    <p className="text-gray-500 mb-4">All files in the folder will be processed</p>
    <button className="btn btn-primary">Select Folder</button>
  </div>
)

const SoftwareIntegrationPlaceholder = () => (
  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
    <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 mb-4">
      <FiMonitor className="h-6 w-6 text-purple-500" />
    </div>
    <h3 className="text-lg font-medium mb-2">Connect Software</h3>
    <p className="text-gray-500 mb-4">Integrate with your favorite tools and apps</p>
    <button className="btn btn-primary">Browse Integrations</button>
  </div>
)

const WearableIntegrationPlaceholder = () => (
  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
    <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-50 mb-4">
      <FiEye className="h-6 w-6 text-green-500" />
    </div>
    <h3 className="text-lg font-medium mb-2">Connect Wearable Device</h3>
    <p className="text-gray-500 mb-4">Import data from your wearable devices</p>
    <button className="btn btn-primary">Connect Device</button>
  </div>
)

export default UploadMemories