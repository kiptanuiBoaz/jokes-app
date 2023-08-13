import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./theme.css";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME, selectTheme } from "../../redux/themeSlice";

export const Theme = () => {
    const [dark,setDark] = useState(true);
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    console.log(theme,dark);


    useEffect(() => {
        console.log("fired")
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
