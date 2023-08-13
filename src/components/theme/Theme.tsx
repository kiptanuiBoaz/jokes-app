import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./theme.css";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../../redux/themeSlice";

export const Theme = () => {
    const [dark,setDark] = useState(true);
    const dispatch = useDispatch();


    //toggle theme global state
    useEffect(() => {
        dispatch(TOGGLE_THEME({theme: dark ? "dark" : "light"}));
    },[dark])

    return (
        <div id="darkmode">
            <input
                onChange={() => setDark(!dark)}
                checked={dark}
                type="checkbox"
                className="checkbox"
                id="checkbox"
            />
            <label htmlFor="checkbox" className="label">
                <BsMoonStarsFill color="white" />
                <BsFillSunFill color="yellow" />
                <div className="ball"></div>
            </label>
        </div>
    )
}
