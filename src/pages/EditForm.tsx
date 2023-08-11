import "./edit-form.scss";

const EditForm = () => {

  const [joke, setJoke] = useState({ id: '', text: '', rating: 0 });
  const editingId = useSelector((state) => state.jokes.editingId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJoke((prevJoke) => ({
      ...prevJoke,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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
      <h2>{editingId ? 'Edit Joke' : 'Add Joke'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Joke:
          <input type="text" name="text" value={joke.text} onChange={handleInputChange} />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" value={joke.rating} onChange={handleInputChange} />
        </label>
        <button type="submit">{editingId ? 'Save' : 'Add'}</button>
      </form>
    </div>
  )
}

export default EditForm