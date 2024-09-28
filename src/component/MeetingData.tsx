import { MdArrowOutward } from "react-icons/md";

// Update the props interface to accept the image prop
interface MeetingDataProps {
  date: string;
  time: string;
  heading: string;
  platform: string;
  img: string;  // Add the image prop here
}

const MeetingData: React.FC<MeetingDataProps> = (props) => {
  return (
    <div>
      <div className="flex items-center p-4 justify-between border-b-2">
        <div>
          <span className="text-slate-600">{props.date}</span>
          <br />
          <span className=" text-xs font-semibold">{props.time}</span>
        </div>
        <div>
          <span className=" text-xs font-semibold">{props.heading}</span>
          <br />
          <div className=" text-xs text-slate-600 flex">
            {/* Use the image prop */}
            <img src={props.img} alt="Platform Icon" className="h-4 mt-1" /> {props.platform}
          </div>
        </div>
        <div>
          <span>
            <MdArrowOutward />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MeetingData;
