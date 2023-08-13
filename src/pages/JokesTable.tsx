import './jokes-table.scss';
import { api } from "../api/axios";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { GET_ALL_JOKES } from "../../apiroutes";
import { Pagination, Spinner } from '../components';
import { JokeInterface, PagenationInterface } from '../types/types';
import { selectPagination } from '../redux/paginatinSlice';
import { UPDATE_JOKE } from '../redux/jokeSlice';
import { useNavigate } from 'react-router-dom';

//feth data as soon as component mounts
const JokesTable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allJokes, setAllJokes] = useState<JokeInterface[]>([]);
  //pagination state from redux store
  const { page, limit }: PagenationInterface = useSelector(selectPagination);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    //get all posts from API
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const jokes = await api.get(`${GET_ALL_JOKES}?_page=${page}&_limit=${limit}`);
        setAllJokes(jokes.data)
        // console.log(jokes.data)
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchPosts();

  }, [limit, page]);

  //edit an existing document
  const handleEditing = ({ id, title, author, body, createdAt, views }: JokeInterface) => {
    dispatch(UPDATE_JOKE({
      joke: { id, title, author, body, createdAt, views },
      editingId: 'editing',
    }));
    navigate("/edit");
  }

  return (
    <section className='table-container'>
      <div className="items-per-page">
        <h2>Jokes</h2>
      </div>
      {isLoading
        ? <Spinner />
        : <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Created Date</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody>
              {allJokes.map(({ id, title, author, body, createdAt, views }) => (
                <tr key={id}>
                  <td
                    className='title'
                    onClick={() => handleEditing({
                      id, title, author, body, createdAt, views
                    })}
                  >
                    {title}
                  </td>
                  <td>{author}</td>
                  <td>{createdAt}</td>
                  <td style={{
                    color: views >= 0 && views <= 25
                      ? 'tomato'
                      : views >= 26 && views <= 50
                        ? 'orange'
                        : views >= 51 && views <= 75
                          ? 'yellow'
                          : views >= 76 && views <= 100
                            ? 'green'
                            : 'black'
                  }}>{views}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      }
    </section>
  )
}

export default JokesTable