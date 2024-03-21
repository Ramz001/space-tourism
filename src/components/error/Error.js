import { Link } from 'react-router-dom'
import '../../index.css'

function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-800 font-text">
      <h3 className="pb-8 text-2xl text-red-500">
        <span className="font-bold">404 </span>
        Page Not Found
      </h3>
      <Link
        to="/"
        className="group rounded-md bg-slate-700 px-8 py-4 hover:bg-opacity-75"
      >
        <span className="text-white group-hover:text-blue-500">Go Home</span>
      </Link>
    </div>
  )
}

export default Error
