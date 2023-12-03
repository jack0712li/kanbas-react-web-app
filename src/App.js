import Labs from "./Labs";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";

function App() {
   return (
      <HashRouter>
         <div>
            <Routes>
               <Route path="/"         element={<Navigate to="/Labs"/>}/>
               <Route path="/project/*" element={<Project />} />
               <Route path="/Labs/*"   element={<Labs/>}/>
               <Route path="/kanbas/*" element={<Kanbas/>}/>
            </Routes>
         </div>
      </HashRouter>
   );

}
export default App;