export default function Sidenav({
  projects,
  onCreateClick,
  onProjectClick,
  pickedProjectId,
  changePickedtProjectId,
}) {
  function handleOnCreateClick() {
    changePickedtProjectId(null);
    onCreateClick();
  }

  return (
    <div className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl mr-40">
      <h2 className="text-xl font-bold my-4">YOUR PROJECTS</h2>
      <button
        onClick={handleOnCreateClick}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      <div className="projects-container">
        {projects.map((project) => (
          <p
            className={project.id === pickedProjectId ? "picked" : null}
            onClick={() => onProjectClick(project.id)}
            key={project.id}
          >
            {project.title} {project.dueDate}
          </p>
        ))}
      </div>
    </div>
  );
}
