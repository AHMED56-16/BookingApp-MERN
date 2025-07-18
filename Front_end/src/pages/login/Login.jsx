import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import axiosInstance from "../../utils/axiosInstance";

const Login = () => {
    const [credentials, setCredentials] = useState({
        userName: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axiosInstance.post("/auth/login", credentials);
            console.log(res);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    

    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="userName" onChange={handleChange} className="lInput" />
                <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Login
                </button>
                {error && <span className="errorMessage">{error.message}</span>}
            </div>
        </div>
    );
};

export default Login;