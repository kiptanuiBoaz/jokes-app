import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./edit-form.scss";
import { RESET_JOKE, selectEditingId, selectJoke } from "../redux/jokeSlice";
import { ADD_JOKE, EDIT_JOKE } from "../../apiroutes";
import { DELETE_JOKE } from "../../apiroutes";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const existingJoke = useSelector(selectJoke);
  const editingId = useSelector(selectEditingId);
  const [joke, setJoke] = useState({ ...existingJoke });//initial state from redux store

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle formData change
  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setJoke((prevJoke) => ({
      ...prevJoke,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const res = await api({
      method: editingId === "editing" ? "PUT" : "POST",
      url: editingId === "editing" ? `${EDIT_JOKE}/${existingJoke.id}` : ADD_JOKE,
      data: joke
    });

    console.log(res)


    dispatch(RESET_JOKE());
    navigate("/");

  };

  //delete joke
  const handleDelete = async () => {
    console.log(DELETE_JOKE)
    const res = await api.delete(`${EDIT_JOKE}/${existingJoke.id}`);
    console.log(res)

    dispatch(RESET_JOKE());
    navigate("/");
  }

  return (
    <div className="edit-form">
      <h2 className="page-title">{joke.title ? 'Edit Joke' : 'Add Joke'}</h2>
      <form >

        <label
          className="title-label"
          htmlFor="title">
          Title:
        </label>
        <br />
        <input
          className="title-input"
          type="text"
          name="title"
          value={joke.title}
          onChange={handleInputChange} />
        <br />

        <label
          className="body-label"
          htmlFor="body"
        >
          Body:
        </label>
        <br />
        <textarea
          className="body-input"
          name="body"
          row={14}
          cols={5}
          value={joke.body}
          onChange={handleInputChange} />
        <br />

        <button onClick={(e) => handleSubmit(e)} type="submit">{editingId === "editing" ? 'Save' : 'Add'}</button>
        {editingId === "editing" && <button onClick={() => handleDelete()}>Delete</button>}
      </form>
    </div>
  )
}

export default EditForm