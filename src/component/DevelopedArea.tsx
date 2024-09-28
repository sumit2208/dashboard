import DevelopedAreaData from "./DevelopedAreaData";

const DevelopedArea = () => {
  return (
    <div className="bg-transparent p-5">
      <div className="mb-4">
        <span className="text-2xl font-semibold">Developed areas</span>
        <p className="text-xs text-slate-600">Most common area of interests</p>
      </div>
      <div className="bg-transparent  text-base">
 
        <DevelopedAreaData
          name1="Sport Skills"
          name2={71} 
       
        />
        <DevelopedAreaData
          name1="Blooging"
          name2={92} 
          
        />
        <DevelopedAreaData
          name1="Leadership"
          name2={33} 
          
        />
        <DevelopedAreaData
          name1="Meditation"
          name2={56} 
          
        />
        <DevelopedAreaData
          name1="Philsophy"
          name2={79} 
          
        />
      </div>
    </div>
  );
}

export default DevelopedArea;
