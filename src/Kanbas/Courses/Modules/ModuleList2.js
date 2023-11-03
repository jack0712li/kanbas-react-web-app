import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";



function ModuleList() {
    const { courseId } = useParams();
    const [modules, setModules] = useState(db.modules);

    return (

        <div className="list-group mt-0 col-lg-12 col-md-6 col-sm-12">
            <div className="module-buttons">
                <div className="float-end">
                    <button type="button" className="btn btn-light text-dark rounded-0 kanbas-button">Collapse All</button>
                    <button type="button" className="btn btn-light text-dark rounded-0 kanbas-button">View Progress</button>

                    <div className="dropdown d-inline-block">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Unpublish</a></li>
                        </ul>
                    </div>

                    <button type="button" className="btn btn-danger rounded-0 kanbas-button"> Module</button>
                    <button type="button" className="btn btn-light text-dark rounded-0 kanbas-button2"></button>
                </div>
                <div className="clearfix"></div>
            </div>
            <hr />
            {modules
                .filter((module) => module.course === courseId)
                .map((module, moduleIndex) => (
                    <div key={moduleIndex} className="list-group mt-3 mb-3 col-12">
                        <div className="list-group-item list-group-item-secondary">
                            {module.name}
                            <span className="icon-right"></span>
                        </div>
                        <div className="collapse show">
                            <div className="list-group-item with-border" style={{ paddingLeft: '20px' }}>
                                <div className="content-text">{module.description}</div>
                                <span className="icon-right"></span>
                            </div>
                            {
                                module.lessons && (
                                    <div>
                                        {module.lessons.map((lesson, lessonIndex) => (
                                            <div key={lessonIndex}>
                                                <div className="list-group-item list-group-item-secondary">
                                                    {lesson.name}
                                                    <span className="icon-right"></span>
                                                </div>
                                                <div className="collapse show">
                                                    <div className="list-group-item with-border" style={{ paddingLeft: '40px' }}>
                                                        <div className="content-text">{lesson.description}</div>
                                                        <span className="icon-right"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default ModuleList;

