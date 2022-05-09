import { Link } from "react-router-dom";
import "../../index.css";

function Error() {
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-slate-800 font-text">
      <h3 className="text-red-500 text-2xl pb-8">
        <span className="font-bold">404 </span>
        Page Not Found
      </h3>
      <Link
        to="/space-tourism"
        className="px-8 py-4 group bg-slate-700 rounded-md hover:bg-opacity-75"
      >
        <span className="text-white group-hover:text-blue-500">Go Home</span>
      </Link>
    </div>
  );
}

export default Error;
