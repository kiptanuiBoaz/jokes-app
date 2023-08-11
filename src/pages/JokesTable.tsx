import './jokes-table.scss';
import { api } from "../api/axios";
import { useEffect, useState } from 'react';
import {useSelector} from "react-redux"
import { GET_ALL_JOKES } from "../../apiroutes";
import { Pagination, Spinner } from '../components';
import { JokeInterface, PagenationInterface } from '../types/types';
import { selectPagination } from '../redux/paginatinSlice';

//feth data as soon as component mounts
const JokesTable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allJokes,setAllJokes] = useState<JokeInterface[]>([]);
  //pagination state from redux store
  const {page,limit}:PagenationInterface = useSelector(selectPagination)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const jokes = await api.get(`${GET_ALL_JOKES}?_page=${page}&_limit=${limit}`);
        // const jokes = await api.get(GET_ALL_JOKES)
        setAllJokes(jokes.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
    setIsLoading(false);

  }, [limit,page]);

  
  return (
    <section>

      <h2>Jokes</h2>
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
              {allJokes.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination/>
        </div>
      }
    </section>
  )
}

export default JokesTable