import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";


function AssignmentsModule() {
  const { courseId } = useParams(); 
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div className="wd-flex-grow-1" id="course-module">
      <div className="module-buttons">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input type="text" className="form-control" style={{ width: '200px' }} placeholder="Search for Assignment" />

          <div className="float-end">
            <button type="button" className="btn btn-light rounded-0 kanbas-button">
              Group
            </button>
            <button type="button" className="btn btn-danger rounded-0 kanbas-button">
               Assignment
            </button>
            <button type="button" className="btn btn-light text-dark rounded-0 kanbas-button2">
            </button>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      <hr />

      <div className="modules">
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary">
            <div className="header-content">
              Assignments
              <div className="percentage rounded-pill">40% of Total</div>
            </div>
          </li>

          {courseAssignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item custom-item pb-2 pl-4">
              <div className="assignment-content">
                <div>
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </Link>
                  <p> {assignment.week} <br/> Due {assignment.dueDate} | {assignment.points} pts</p>
                </div>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AssignmentsModule;