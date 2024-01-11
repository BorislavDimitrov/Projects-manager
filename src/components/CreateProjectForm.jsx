import { useState, useRef } from "react";

export default function CreateProjectFrom({ onCreate, onCancelClick }) {
  const [isFormValid, setIsFormValid] = useState(true);

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleOnClick() {
    if (
      title.current.value !== "" &&
      description.current.value !== "" &&
      dueDate.current.value !== ""
    ) {
      setIsFormValid(true);
      onCreate(
        title.current.value,
        description.current.value,
        dueDate.current.value
      );
      title.current.value = null;
      description.current.value = null;
      dueDate.current.value = null;
    } else {
      setIsFormValid(false);
    }
  }

  return (
    <div className="form-container">
      <div className="cancelSave-buttons">
        <button onClick={onCancelClick}>Cancel</button>
        <button onClick={handleOnClick}>Save</button>
      </div>
      <form>
        <div className="input-wrapper">
          {!isFormValid && <p>Fill all inputs</p>}
          <label className=" text-2xl font-bold">TITLE</label>
          <input ref={title} id="title" name="title" type="text" />
          <label className=" text-2xl font-bold">DESCRIPTION</label>
          <textarea
            ref={description}
            id="description"
            name="description"
            type="textarea"
          ></textarea>
          <label className=" text-2xl font-bold">DUE DATE</label>
          <input ref={dueDate} name="date" type="date" />
        </div>
      </form>
    </div>
  );
}
