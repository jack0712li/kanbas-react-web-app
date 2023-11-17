import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import CourseTitle from "./CourseTitle"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const URL = `https://kanbas-node-server-app-j89x.onrender.com/api/courses`;
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  const location = useLocation();
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