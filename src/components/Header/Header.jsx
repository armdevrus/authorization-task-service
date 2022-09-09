import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleEnter } from "../../features/user-slice/user-slice";
import logo from "../../img/logo.svg";
import exit from "../../img/exit.svg";
import "./Header.css";

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    return (
        <>
            <div className="h-header">
                <img src={logo} alt="logo" className="h-img-logo" />
                {user.isEnter && (
                    <div className="h-wrapper">
                        <h1 className="h-title">{user.login}</h1>
                        <Link to="/" onClick={() => dispatch(toggleEnter(false))}>
                            <img src={exit} alt="exit" className="h-img-exit" />
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
