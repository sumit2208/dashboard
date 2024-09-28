import { FaArrowCircleUp } from "react-icons/fa";

interface DevelopedAreaDataProps {
    name1: string;
    name2: number; 
    
}

const DevelopedAreaData: React.FC<DevelopedAreaDataProps> = (props) => {
    return (
      <div className="flex items-center pt-4 pb-4 justify-between">
        <div>{props.name1}</div>
        <div className="flex   items-center">
          <input 
            type="range" 
            value={props.name2} 
            min="0" 
            max="100" 
            height={1}
            readOnly // Use this if you want to prevent user interaction
          /> 
          <span className="ml-2">{props.name2}%</span>
        </div>
        <div>
            <FaArrowCircleUp/>
        </div>
      </div>
    );
}

export default DevelopedAreaData;
