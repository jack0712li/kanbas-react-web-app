import {React, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div className="list-group mt-0 col-lg-12 col-md-6 col-sm-12">
        <div className="module-buttons">
          <input value={module.name} className="form-control" onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
          <textarea value={module.description} className="form-control" onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}></textarea>
          <div className="float-end mt-2">
              <button onClick={handleAddModule} className="btn btn-success">Add</button>
              <button onClick={handleUpdateModule} className="btn btn-danger ">Update</button>
          </div>
        </div>
        <hr />

        
        {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <div key={index} className="list-group mt-3 mb-3 col-12">
                    <div className="list-group-item list-group-item-secondary">
                        {module.name}
                        <button className="btn btn-danger float-end" onClick={() => handleDeleteModule(module._id)}>Delete</button>
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