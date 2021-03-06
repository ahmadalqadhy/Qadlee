import React from 'react'
import ModalContainer from '../modal/modal'
import PostIndexContainer from '../post_display/post_index_container'
import NavbarContainer from '../navbar/navbar_container'

const Dashboard = ({ currentUser, logout, openModal, closeModal }) => (
    <div className="dashboard-root">
        <NavbarContainer />
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="content-in-dashboard">
            <div className="left-side-of-dashboard">
                <div className="dashboard-forms">
                    <img src={currentUser.profilePicUrl} className="form-profile-pic"/>
                    <ul className="form-icons">
                        <li className="form-icon" onClick={() => openModal("textform")}><i className="fas fa-font icon"></i>Text</li>
                        <li className="form-icon" onClick={() => openModal("imageform")}><i className="fas fa-camera icon"></i>Photo</li>
                        <li className="form-icon" onClick={() => openModal("quoteform")}><i className="fas fa-quote-right icon"></i>Quote</li>
                        <li className="form-icon" onClick={() => openModal("linkform")}><i className="fas fa-link icon"></i>Link</li>
                        <li className="form-icon" onClick={() => openModal("chatform")}><i className="fas fa-comments icon"></i>Chat</li>
                        <li className="form-icon" onClick={() => openModal("audioform")}><i className="fas fa-headphones icon"></i>Audio</li>
                        <li className="form-icon" onClick={() => openModal("videoform")}><i className="fas fa-video icon"></i>Video</li>
                    </ul>
                </div>
                <div className='post-index'>
                    <PostIndexContainer />
                </div>
            </div>
        </div>
        <ModalContainer />
    </div>
)

export default Dashboard