import pic from '../assets/sumit.png'
import { FaStar } from "react-icons/fa";
const Profil = () => {
    return (
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
      
        <div className="col-span-1 row-span-2">
          <div className="bg-white rounded-lg p-6 shadow-lg grid grid-rows-2 gap-4">
           
            <div className="flex flex-col items-center">
             
              <div className="relative">
                <img
                  className="w-24 h-24 rounded-full border-4 p-2 border-gray-300 "
                  src= {pic} 
                  alt="Profile"
                />
                <span className="absolute bottom-0 right-0 block w-6 h-6 bg-black rounded-full border-2 border-white"><FaStar className='text-white h-2 relative mt-1.5 ml-0.5' /></span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-900">Sumit Gupta</h2>
              <p className="text-sm text-gray-500">Design Manager</p>
            </div>
  
            {/* Row 2: Stats */}
            <div className="flex justify-around text-center ">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-red-500">11</span>
                <p className="text-gray-500 text-sm">Tasks</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-orange-500">56</span>
                <p className="text-gray-500 text-sm">Projects</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-yellow-500">12</span>
                <p className="text-gray-500 text-sm">Meetings</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Task Cards */}
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Prioritized Tasks */}
          <div className="bg-gradient-to-r from-red-400 to-pink-500 rounded-lg p-6 shadow text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Prioritized tasks</h3>
              <span className="text-2xl">⏱</span>
            </div>
            <div className="mt-6">
              <p className="text-4xl font-bold">83%</p>
              <p className="text-sm">Avg. Completed</p>
            </div>
          </div>
  
          {/* Additional Tasks */}
          <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-lg p-6 shadow text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Additional tasks</h3>
              <span className="text-2xl">✅</span>
            </div>
            <div className="mt-6">
              <p className="text-4xl font-bold">56%</p>
              <p className="text-sm">Avg. Completed</p>
            </div>
          </div>
        </div>
  
        {/* Trackers Section */}
        <div className="col-span-3 lg:col-span-2 bg-gray-100 rounded-lg p-6 shadow flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">Trackers connected</h4>
            <p className="text-sm text-gray-500">3 active connections</p>
          </div>
          <div className="flex space-x-4">
            {/* Icons of connected trackers */}
            <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">🌐</span>
            <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">📊</span>
            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">📈</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profil;
  