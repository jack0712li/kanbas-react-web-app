import { Link } from "react-router-dom";
import './index.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import React from "react";

function Dashboard(  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse } ) {


  

    return (
      <div className='dashboard-container'>
          <div className="wd-flex-grow-1">
              <h1 className="dashboard-title">Dashboard</h1>
              <hr />
              <div className="wd-kanbas-dashboard">
                  <div>
                      <h2>Published Courses ({courses.length})</h2>
                      <hr />
                  </div>
                  <div className="main-content">
                      <div className="row">
                          {courses.map((course) => (
                              <div key={course._id} className="card-container">
                                  <div className="card">
                                      <div className="card-image">
                                          <BsThreeDotsVertical className="card-icon" />
                                      </div>
                                      <div className="card-body">
                                          <Link to={`/Kanbas/Courses/${course._id}`}>
                                              <h5 className="card-title">{course.name}</h5>
                                          </Link>
                                          <p className="card-text">{course.number}</p>
                                          <p className="card-text">
                                              {course.startDate} -- {course.endDate}
                                          </p>
                                          <button className="btn btn-success btn-sm"
                                            onClick={(event) => {
                                              event.preventDefault();
                                              setCourse(course);
                                            }}>
                                            Edit
                                          </button>
                                          <button className="btn btn-danger btn-sm" onClick={() => deleteCourse(course._id)}>Delete</button>
                                      </div>
                                  </div>
                              </div>
                          ))}
                          <div className="card-container" style={{ margin: '10px 0' }}> 
                          <div className="card" style={{ border: 'none', boxShadow: 'none' }}>
                              <h5>Course</h5>
                              <input value={course.name} className="form-control"
                                  onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                              <input value={course.number} className="form-control"
                                  onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                              <input value={course.startDate} className="form-control" type="date"
                                  onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                              <input value={course.endDate} className="form-control" type="date"
                                  onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                              <button className="btn btn-success btn-sm" onClick={addNewCourse}>Add</button>
                              <button className="btn btn-danger btn-sm" onClick={updateCourse}>Update</button>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Dashboard;