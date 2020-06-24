import React from 'react'
import ModalContainer from '../modal/modal'

const Dashboard = ({ currentUser, logout, openModal, closeModal }) => (
    <div className="dashboard-root">
        <h1>Navbar</h1>
        <div>
            <h2>Hi, {currentUser.username}!</h2>
            <ul className="form-icons">
                <li onClick={() => openModal()}><i className="fas fa-font"></i></li>
                {/* <li><i class="fas fa-camera"></i></li>
                <li><i class="fas fa-quote-right"></i></li>
                <li><i class="fas fa-link"></i></li>
                <li><i class="fas fa-comments"></i></li>
                <li><i class="fas fa-headphones"></i></li>
                <li><i class="fas fa-video"></i></li> */}
            </ul>
            <ModalContainer/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    </div>
)

export default Dashboard