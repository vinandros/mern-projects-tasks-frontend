import React from "react";
import TaskContext from "../../context/tasks/taskContext";

const Task = ({ taskData }) => {
  const {
    deleteTask,
    getProjectsTaks,
    updateTask,
    setActiveTask,
  } = React.useContext(TaskContext);

  const handleTaskState = (task) => {
    updateTask(task);
  };

  const handleEdit = (task) => {
    setActiveTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{taskData.name}</p>
      <div className="estado">
        {taskData.state ? (
          <button
            type="button"
            className="completo"
            onClick={() => handleTaskState(taskData)}
          >
            finished
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => handleTaskState(taskData)}
          >
            Pendenting
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          onClick={() => handleEdit(taskData)}
          className="btn btn-primario"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            deleteTask(taskData._id, taskData.projectId);
            getProjectsTaks(taskData.projectId);
          }}
          className="btn btn-secundario"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
