import { CiCalendar } from "react-icons/ci";
import MeetingData from "./MeetingData";
import meet from '../assets/zoom.png'; 
import zoommeet from '../assets/meet.png'
import { MdKeyboardArrowRight } from "react-icons/md";

const Meeting = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center p-3 justify-between">
        <div>
          <span className="text-xl font-semibold">My Meetings</span>
        </div>
        <div>
          <button className="p-2 bg-white rounded-full shadow">
            <CiCalendar className="text-gray-600 h-6 w-6" />
          </button>
        </div>
      </div>

      
      <div>
        <MeetingData
          date="Tue, 11 Jul"
          time="08:15 am"
          heading="Quick Daily Meeting"
          platform="Zoom"
          img={meet}  
        />
        <MeetingData
          date="Wed, 12 Jul"
          time="10:30 am"
          heading="John Onboarding"
          platform="Google Meet"
          img={zoommeet} 
        />
        <MeetingData
          date="Wed, 12 Jul"
          time="2:30 pm"
          heading="Call with a New Team"
          platform="Google Meet"
          img={zoommeet} 
        />
         <MeetingData
          date="Tue, 15 Jul"
          time="04:00 pm"
          heading="Lead Designers Event"
          platform="Zoom"
          img={meet}  
        />
      </div>

      <div className="flex items-center justify-center p-4  bg-transparent mb-3 ">
        <span className="text-xs text-gray-600">See all meetings </span> 
        <MdKeyboardArrowRight className="mt-1 text-gray-600"/>

      </div>
    </div>
  );
}

export default Meeting;
