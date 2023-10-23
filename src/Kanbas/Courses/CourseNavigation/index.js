import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Assignments",
    "Grades",
    "Piazza",
    "Quizzes",
    "Syllabus",
    "Zoom Meeting",
    "People",
    "Setting/CourseDetails"
  ];

  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <ul className="wd-course-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={`/Kanbas/Courses/${courseId}/${link}`}>
            {link.split("/")[0]}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CourseNavigation;
