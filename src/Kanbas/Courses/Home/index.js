import ModuleList from "../Modules/ModuleList";
import CourseStatus from "../Status";

function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <ModuleList />
        </div>
        <div className="col-2">
            <CourseStatus />
        </div>
    </div>
  );
}
export default Home;