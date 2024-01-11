import { useState, useRef } from "react";

import Sidenav from "./components/Sidenav.jsx";
import NoProjectsSelected from "./components/NoProjectSelected.jsx";
import CreateProjectFrom from "./components/CreateProjectForm.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

let idCounter = 1;

const projects = [
  {
    id: 1,
    title: "TEST",
    description: "TEST",
    dueDate: "20/04/1999",
    tasks: [{ id: 1, title: "example" }],
  },
];

function App() {
  const [isProjectPicked, setIsProjectPicked] = useState(false);
  const [isFormShown, setFormShow] = useState(false);
  const [isProjectDetailsShown, setProjectDetailsShow] = useState();
  const [projectId, setProjectId] = useState();

  let projectDetail = useRef();

  function handleCreate(title, description, dueDate) {
    if (title != "" && description != "" && dueDate != "") {
      idCounter++;
      let newProject = {
        id: idCounter,
        title: title,
        description: description,
        dueDate: dueDate,
      };

      newProject.tasks = [];

      projects.push(newProject);
      renderProjectDetails(newProject.id);
    }
  }

  function renderProjectDetails(id) {
    projectDetail.current = projects.find((obj) => obj["id"] === id);
    setProjectDetailsShow(true);
    setFormShow(false);
    setIsProjectPicked(true);
    setProjectId(id);
  }

  function onCreateClick() {
    setIsProjectPicked(true);
    setFormShow(true);
    setProjectDetailsShow(false);
  }

  function onCancelClick() {
    setIsProjectPicked(false);
    setFormShow(false);
    setProjectDetailsShow(false);
  }

  function deleteProject(projectId) {
    const indexToDlete = projects.findIndex(
      (project) => project.id === projectId
    );
    projects.splice(indexToDlete, 1);
    setIsProjectPicked(false);
    setProjectDetailsShow(false);
  }

  function deleteTask(projectId, taskId) {
    const project = projects.find((project) => project.id === projectId);
    const indexToDelete = project.tasks.findIndex((task) => task.id === taskId);
    project.tasks.splice(indexToDelete, 1);
  }

  function createTask(projectId, taskTitle) {
    const project = projects.find((project) => project.id === projectId);
    const newTask = { id: project.tasks.length + 1, title: taskTitle };
    project.tasks.push(newTask);
  }

  return (
    <>
      <h1 className="my-20 text-center text-5xl font-bold">Project Manager</h1>
      <div className="sidenav-main-wrapper">
        <Sidenav
          onProjectClick={renderProjectDetails}
          onCreateClick={onCreateClick}
          projects={projects}
          pickedProjectId={projectId}
          changePickedtProjectId={setProjectId}
        />
        {!isProjectPicked && (
          <NoProjectsSelected onCreateClick={onCreateClick} />
        )}
        {isFormShown && (
          <CreateProjectFrom
            onCreate={handleCreate}
            onCancelClick={onCancelClick}
          />
        )}
        {isProjectDetailsShown && (
          <ProjectDetails
            project={projectDetail}
            onClickDeleteProject={deleteProject}
            onClickDeleteTask={deleteTask}
            onClickAddTask={createTask}
          />
        )}
      </div>
    </>
  );
}

export default App;
