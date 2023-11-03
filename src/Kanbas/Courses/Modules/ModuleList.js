import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="list-group mt-0 col-lg-12 col-md-6 col-sm-12">
        <div className="module-buttons">
          <input value={module.name} className="form-control" onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
          <textarea value={module.description} className="form-control" onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}></textarea>
          <div className="float-end mt-2">
              <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success">Add</button>
              <button onClick={() => dispatch(updateModule(module))} className="btn btn-danger ">Update</button>
          </div>
        </div>
        <hr />

        
        {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <div key={index} className="list-group mt-3 mb-3 col-12">
                    <div className="list-group-item list-group-item-secondary">
                        {module.name}
                        <button className="btn btn-danger float-end" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
                        <button className="btn btn-success float-end me-2" onClick={() => dispatch(setModule(module))}>Edit</button>
                    </div>
                    <div className="collapse show">
                        <div className="list-group-item with-border" style={{ paddingLeft: '20px' }}>
                            <div className="content-text">{module.description}</div>
                        </div>
                        {
                            module.lessons && (
                                <div>
                                    {module.lessons.map((lesson, index) => (
                                        <div key={index}>
                                            <div className="list-group-item list-group-item-secondary">
                                                {lesson.name}
                                            </div>
                                            <div className="collapse show">
                                                <div className="list-group-item with-border" style={{ paddingLeft: '40px' }}>
                                                    <div className="content-text">{lesson.description}</div>
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