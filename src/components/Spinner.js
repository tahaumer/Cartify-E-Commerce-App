import React,{ useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({path = "login"}) => {
    const [count,setCount] = useState(3)
    const navigate = useNavigate()
    const location= useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue )
        },1000);
        count === 0 && navigate(`/${path}`,
        {state: location.pathname}
        )
        return () => clearInterval(interval)
    }, [count,navigate,location,path])
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="loader">
        <label className="label">Redirecting In {count} seconds</label>
        <div className="loading"></div>
      </div>
    </div>
  );
};

export default Spinner;
