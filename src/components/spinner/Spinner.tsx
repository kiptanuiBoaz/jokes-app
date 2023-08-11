import { useEffect } from "react"
import "./spinner.scss";
import { Loading } from 'notiflix/build/notiflix-loading-aio';


export const Spinner = () => {
    useEffect(() => {
        Loading.dots({
            svgColor: "#4d7e3e",
            backgroundColor: "rgba(0,0,0,0.4)"
        });
        return () => Loading.remove()
    }, [])
    return <></>
}
