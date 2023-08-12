import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./edit-form.scss";
import { selectEditingId, selectJoke } from "../redux/jokeSlice";

const EditForm = () => {
  const existingJoke = useSelector(selectJoke);
  const editingId = useSelector(selectEditingId);
  console.log(editingId);
  const [joke, setJoke] = useState({});

  useEffect(()=>{})

  const handleInputChange = ({ target: { name, value } }) => {
    setJoke((prevJoke) => ({
      ...prevJoke,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (editingId) {
      // Dispatch the update action
      dispatch(updateJoke(joke));
    } else {
      // Dispatch the add action
      dispatch(addJoke(joke));
    }

    setJoke({ id: '', text: '', rating: 0 });
  };

  return (
    <div>
      <h2>{joke.title ? 'Edit Joke' : 'Add Joke'}</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title: </label><br />
        <input type="text" name="title" value={joke.title} onChange={handleInputChange} /><br />

        <label htmlFor="body">Body:</label><br />
        <textare  name="body" row={14} cols={5} value={joke.body} onChange={handleInputChange} /><br />

    

        <button type="submit">{joke.title ? 'Save' : 'Add'}</button>
      </form>
    </div>
  )
}

export default EditForm