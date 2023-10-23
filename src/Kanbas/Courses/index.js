import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import CourseTitle from "./CourseTitle"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = db.courses.find((course) => course._id === courseId);

  const currentBreadcrumb = location.pathname.split('/').pop();

  return (
    <div className="wd-kanbas-course">
      <CourseTitle courseId={course._id} courseNumber={course.number} currentBreadcrumb={currentBreadcrumb} />
      <div className="content-container">
        <CourseNavigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;