import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home page</Link></li>
            <li>
                <Link to='/todo-app'>Todo App</Link>
            </li>
        </ul>
    )
}

export default Header;