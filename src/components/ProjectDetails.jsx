import { useState, useRef } from "react";
let counter = 1;
export default function ProjectDetails({
  project,
  onClickDeleteProject,
  onClickDeleteTask,
  onClickAddTask,
}) {
  const [reset, setReset] = useState(-1);
  const inputRef = useRef();

  function handleClear(taskId) {
    onClickDeleteTask(project.current.id, taskId);
    setReset(counter++);
  }

  function handleCreateTask() {
    if (inputRef.current.value !== "") {
      onClickAddTask(project.current.id, inputRef.current.value);
      inputRef.current.value = "";
      setReset(counter++);
    }
  }

  return (
    <>
      <div displa={{ displa: "flex", flexDirection: "column" }}>
        <div className="info-box">
          <div className="project-content">
            <h2>{project.current.title}</h2>
            <p className="date">{project.current.dueDate}</p>
            <p className="description">{project.current.description}</p>
          </div>
          <div>
            <button onClick={() => onClickDeleteProject(project.current.id)}>
              Delete
            </button>
          </div>
        </div>
        <div className="tasks-box">
          <h3>Tasks</h3>
          <div className="input-box">
            <div>
              <input ref={inputRef} type="text"></input>
              <button onClick={handleCreateTask}>Add Task</button>
            </div>
          </div>
          <div className="tasks-list">
            {project.current.tasks.map((task) => (
              <p key={task.id}>
                {task.title}{" "}
                <button onClick={() => handleClear(task.id)}>Clear</button>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
