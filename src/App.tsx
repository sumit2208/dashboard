import DevelopedArea from "./component/DevelopedArea";
import Graph from "./component/Graph";
import Meeting from "./component/Meeting";
import Navbar from "./component/Navbar";
import Profil from "./component/Profil";

const App = () => {
  return (
    <div className="flex">
      
      <div className="w-9/12 p-3 bg-custom-gray border-r-2">
    
        <Navbar />
        <Profil/>
       <Graph/>
 

      </div>

       
      <div className="w-3/12 p-3 bg-custom-gray">
       <Meeting/>
       <DevelopedArea/>
      </div>
    </div>
  );
};

export default App;
