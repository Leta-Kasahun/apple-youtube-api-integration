import { FaApple } from 'react-icons/fa'

function AppleFooter() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-10">
      <div className="flex flex-col items-center gap-2">
        <FaApple className="text-2xl mb-1" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Education purpose. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Sales and Refunds</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Legal</a>
        </div>
      </div>
    </footer>
  )
}

export default AppleFooter