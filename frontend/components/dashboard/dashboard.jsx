import React from 'react'

const Dashboard = ({ currentUser, logout }) => (
    <div>
        <h1>This is the HomePage</h1>
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
    </div>
)

export default Dashboard