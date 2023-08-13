import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./edit-form.scss";
import { RESET_JOKE, selectEditingId, selectJoke } from "../redux/jokeSlice";
import { ADD_JOKE, EDIT_JOKE } from "../../apiroutes";
import { DELETE_JOKE } from "../../apiroutes";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { DangerBtn } from "../components/danger-btn/DangerBtn";
import { ActionBtn } from "../components";

const EditForm = () => {
  const existingJoke = useSelector(selectJoke);
  const editingId = useSelector(selectEditingId);
  const [joke, setJoke] = useState({ ...existingJoke });//initial state from redux store

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle formData change
  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setJoke((prevJoke) => ({
      ...prevJoke,
      [name]: value,
    }));
  };


  const handleSubmit = async () => {
  
    // const res = await api({
    //   method: editingId === "editing" ? "PUT" : "POST",
    //   url: editingId === "editing" ? `${EDIT_JOKE}/${existingJoke.id}` : ADD_JOKE,
    //   data: joke
    // });
    // console.log(res)

    dispatch(RESET_JOKE());
    navigate("/");

  };

  //delete joke
  const handleDelete = async () => {
    // console.log(DELETE_JOKE)
    // const res = await api.delete(`${EDIT_JOKE}/${existingJoke.id}`);
    // console.log(res)

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
          rows={6}
          cols={5}
          value={joke.body}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)} />
        <br />

        <ActionBtn clickHandler={handleSubmit}>{editingId === "editing" ? 'Save' : 'Add'}</ActionBtn>
        {editingId === "editing" && <DangerBtn clickHandler={handleDelete}>Delete</DangerBtn>}

      </form>
    </div>
  )
}

export default EditForm