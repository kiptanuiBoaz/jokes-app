import './navbar.scss';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UPDATE_EDITING_ID, selectEditingId } from '../../redux/jokeSlice';
import { selectTheme } from '../../redux/themeSlice';
import { ActionBtn, DangerBtn, Theme } from '..';

export const Navbar = () => {
  //redux store states
  const editingId = useSelector(selectEditingId);
  const theme = useSelector(selectTheme);

  //navigation fns
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //remove cookie 
  const logOut = () => {
    Cookies.remove('token');
    navigate("/login");
  }

  //handle click event
  const handleClick = () => {
    dispatch(UPDATE_EDITING_ID(editingId !== "editing" ? "editing" : "add"))
    navigate(editingId === "editing" ? "/" : "/edit");
  }


  return (
    <nav className={`navbar-container ${theme}-nav`}>
      <h1 className='logo'>Joke App</h1>
      {/* display limit selectror when viewing table */}

      <div className='nav-items'>

        <div className='link-container'>
          <ActionBtn clickHandler={handleClick}>  {editingId === "add" ? "Add New Joke" : "Back to Jokes"}</ActionBtn>
          <DangerBtn clickHandler={logOut}>Logout</DangerBtn>
        </div>
        <Theme />
      </div>

    </nav>
  )
}
