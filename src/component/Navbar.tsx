import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center   bg-transparent px-4 py-2     ">
 
      <div className="flex items-center space-x-3">
        <div className="bg-blue-500 h-10   rounded-full flex items-center justify-center">
          <span className="text-white font-bold">Logo</span>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Welcome, Kristin</h1>
          <p className="text-sm text-gray-500">Your personal dashboard overview</p>
        </div>
      </div>

  
      <div className="flex items-center">
      <div className="flex items-center space-x-2 bg-gray-200 rounded-full p-2  ">
        <CiSearch className="text-gray-600 h-5 w-5" />
        <input
          type="text"
          placeholder="Search"
          className=" outline-none border-none bg-transparent text-gray-900"  
        />
      </div>

 
      <button className="p-2 bg-white rounded-full shadow ">
        <AiOutlineUser className="text-gray-600 h-6 w-6 " />
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
