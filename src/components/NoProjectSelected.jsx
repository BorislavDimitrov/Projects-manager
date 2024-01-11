import NotesImage from "../assets/no-projects.png";

export default function NoProjectsSelected({ onCreateClick }) {
  return (
    <div className="noProject-container">
      <img className="w-40 h-40 object-contain" src={NotesImage} />
      <h2 className="text-xl font-bold text-stone-500">No Project Selected</h2>
      <button
        onClick={onCreateClick}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        Create New Project
      </button>
    </div>
  );
}
