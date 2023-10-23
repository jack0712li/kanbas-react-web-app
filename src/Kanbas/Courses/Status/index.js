import React from 'react';
import './index.css';

function CourseStatus() {
    return (
      <div id="course-status" className="status-container">
          <div>
              <h5>Course Status</h5>
              <div className="wd-flex-row-container">
                  <button type="button" className="btn btn-light status-btn">Unpublish</button>
                  <button type="button" className="btn btn-success status-btn">Published</button>
              </div>
              
              <div className="wd-flex-col-container kanbas-Status-buttons">
                  <button type="button" className="btn btn-light status-btn">Import Existing content</button>
                  <button type="button" className="btn btn-light status-btn">Import From Commons</button>
                  <button type="button" className="btn btn-light status-btn">Choose Home Page</button>
                  <button type="button" className="btn btn-light status-btn">View Course Stream</button>
                  <button type="button" className="btn btn-light status-btn">New Announcement</button>
                  <button type="button" className="btn btn-light status-btn">View Course Notifications</button>
              </div>
  
              <hr />
              <div className="coming-up">
                  <h5>Coming Up</h5>
                  <a href="#" className="red-text">View Calendar</a>
                  <ul className="coming-up-list">
                      <li><a href="#">Lecture CS4550 SEP7 at 11:45am</a></li>
                      <li><a href="#">Lecture CS5500 SEP7 at 11:45am</a></li>
                      <li><a href="#">Lecture CS6550 SEP7 at 11:45am</a></li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
  
  export default CourseStatus;
