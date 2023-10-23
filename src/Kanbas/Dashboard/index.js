import React from 'react';
import courses from '../Database/courses.json';
import { Link } from "react-router-dom";
import './index.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Dashboard() {
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
                            {courses.map(({_id, name, number, startDate, endDate}) => (
                                <div key={_id} className="card-container">
                                    <div className="card">
                                        <div className="card-image">
                                            <BsThreeDotsVertical className="card-icon" />
                                        </div>
                                        <div className="card-body">
                                            
                                            <Link to={`/Kanbas/Courses/${_id}`}>
                                                <h5 className="card-title">{name}</h5>
                                            </Link>
                                            <p className="card-text">{number}</p>
                                            <p className="card-text">
                                                {startDate} - {endDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;
