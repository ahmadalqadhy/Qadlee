import React from 'react';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    renderErrors() {
        let str = this.props.errors.join()
        let arr = str.split(",")
        // return (
        //     <ul className="error-list">
        //         {arr.map(error => (
        //             <li className="error-item" >{error}</li>
        //         ))}
        //     </ul>
        // )
        return (
            <div className="error-list">
                {arr.map(error => (
                    <p className="error-item" >{error}</p>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className="background">
                <Link to='/login'><button className="switch-paths">Login</button></Link>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <Link to="/" style={{ textDecoration: 'none' }}><h2 className="home-page-logo">qadlee</h2></Link>
                        <p className="home-page-message">Come for what you love.</p>
                        <p className="home-page-message">Stay for what you discover.</p>
                        <div className="login-form">
                            <br />
                            <input type="text"
                                placeholder="  Email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                            <br />
                            <input type="text"
                                placeholder="  Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                            <br />
                            <input type="text"
                                placeholder="  Username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                            {this.renderErrors()}
                            <input className="button" id="signup" type="submit" value="Sign up" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;
