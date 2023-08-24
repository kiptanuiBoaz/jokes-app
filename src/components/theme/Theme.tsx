import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./theme.css";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME, selectTheme } from "../../redux/themeSlice";

export const Theme = () => {
    //local reactive state
    const [dark,setDark] = useState(true);
    //global theme refrence
    const theme = useSelector(selectTheme);
    
    const dispatch = useDispatch();


    //toggle theme global state
    useEffect(() => {
        dispatch(TOGGLE_THEME({theme: dark ? "dark" : "light"}));
    },[dark])

    return (
        <div id="darkmode">
            <input
                onChange={() => setDark(!dark)}
                checked={theme === "dark"}
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
