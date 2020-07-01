import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <div className="navbar">
        <span className="searchbar">
            Q
        </span>
        <ul className="navbaricons">
            <NavLink exact to='/dashboard' className='navbaricon' activeClassName='curr'><li><i class="fas fa-home navbaricon"></i></li></NavLink>
            <li><i class="far fa-compass navbaricon"></i></li>
            <li><i class="fas fa-user navbaricon"></i></li>
            <a href="https://www.linkedin.com/in/ahmad-alqadhy-1895a6161/" target="_blank"><li><i class="fab fa-linkedin navbaricon"></i></li></a>
            <a href="https://github.com/ahmadalqadhy" target="_blank"><li><i class="fab fa-github navbaricon"></i></li></a>
        </ul>
    </div>
)

export default Navbar