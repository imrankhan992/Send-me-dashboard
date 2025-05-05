import { FiMoreHorizontal } from 'react-icons/fi'

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 mr-2">
        <FiMoreHorizontal className="text-indigo-600" />
      </div>
      <span className="text-xl font-semibold">Second Me</span>
    </div>
  )
}

export default Logo