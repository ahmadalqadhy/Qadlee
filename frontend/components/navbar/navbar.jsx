import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({currentUser, logout}) => (
    <div className="navbar">
        <span className="searchbar">
            Q
        </span>
        <ul className="navbaricons">
            {/* <NavLink exact to='/dashboard' className='navbaricon' activeClassName='curr'><li><i className="fas fa-home navbaricon"></i></li></NavLink> */}
            {/* <li><i className="far fa-compass navbaricon"></i></li> */}
            <li className="person-container"><i className="fas fa-user navbaricon2"></i>
                <div className="logout-dropdown">
                <p className="hello-message">Hello, {currentUser.username}</p>
                    <button className="logout-button" onClick={logout}>Log Out</button>
                </div>
            </li>
            <a href="https://angel.co/u/ahmad-alqadhy" target="_blank"><li><i className="fab fa-angellist navbaricon"></i></li></a>
            <a href="https://www.linkedin.com/in/ahmad-alqadhy-1895a6161/" target="_blank"><li><i className="fab fa-linkedin navbaricon"></i></li></a>
            <a href="https://github.com/ahmadalqadhy" target="_blank"><li><i className="fab fa-github navbaricon"></i></li></a>
        </ul>
    </div>
)

export default Navbar