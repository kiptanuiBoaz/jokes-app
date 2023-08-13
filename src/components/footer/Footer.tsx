import "./footer.scss";
import { selectTheme } from '../../redux/themeSlice';
import { useSelector } from 'react-redux';

export const Footer = () => {
  const theme = useSelector(selectTheme);
  return (
   <footer className={`${theme}-footer`}><p>jokesapp@{new Date().getFullYear()}</p></footer>
  )
}
