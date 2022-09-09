import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleEnter } from "../../features/user-slice/user-slice";
import { getPhotos } from "../../features/photos-slice/photos-slice";
import { getUsers } from "../../features/users-slice/users-slice";
import Header from "../../components/Header/Header";
import "./Authorization.css";
import { getPosts } from "../../features/posts-slice/posts-slice";

const Authorization = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChangeLogin = (event) => {
        setLogin(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmitValues = (event) => {
        event.preventDefault();
        if (login.length !== 0 && password.length !== 0) {
            if (user.login === login && user.password === password) {
                navigate("/posts", { replace: true });
                dispatch(toggleEnter(true));
                dispatch(getPhotos());
                dispatch(getUsers());
                dispatch(getPosts());
                setLogin("");
                setPassword("");
            } else {
                setError("Неверный логин или пароль!");
                setLogin("");
                setPassword("");
            }
        } else {
            setError("Заполните все поля!");
        }
    };

    return (
        <>
            <Header />
            <div className="a">
                <form onSubmit={handleSubmitValues} className="a-form">
                    <h2 className="a-title">Authorization</h2>
                    <div className="a-wrapper">
                        <div className="a-wrapper-login">
                            <label htmlFor="log">login</label>
                            <input
                                style={{
                                    border: error
                                        ? "4px solid #f79090"
                                        : "4px solid #27569c",
                                }}
                                type="text"
                                name="login"
                                id="log"
                                onChange={handleChangeLogin}
                                value={login}
                            />
                        </div>
                        <div className="a-wrapper-password">
                            <label htmlFor="pas">password</label>
                            <input
                                style={{
                                    border: error
                                        ? "4px solid #f79090"
                                        : "4px solid #27569c",
                                }}
                                type="password"
                                name="password"
                                id="pas"
                                onChange={handleChangePassword}
                                value={password}
                            />
                        </div>
                        {error && <h6 className="a-title-error">{error}</h6>}
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Authorization;
