import React from 'react';
import { Link } from "react-router-dom";
import "./index.css";

function CourseTitle({ courseId, courseNumber, currentBreadcrumb }) {
    return (
      <div className="wd-flex-grow-1" id="kanbas-title">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <i className="fa-solid fa-list wd-kanbas-title"></i>
              <Link to={`/Kanbas/Courses/${courseId}`} className="breadcrumb-link">{courseNumber}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{currentBreadcrumb}</li>
          </ol>
        </nav>
        <hr />
      </div>
    );
}

export default CourseTitle;