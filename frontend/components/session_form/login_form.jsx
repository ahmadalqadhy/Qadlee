import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
        this.props.login(user)
            .then(() => this.props.history.push("/dashboard"))
    }

    // renderErrors() {
        // return (
        //     <ul>
        //         {this.props.errors.map((error, i) => (
        //             <li key={`error-${i}`}>
        //                 {error}
        //             </li>
        //         ))}
        //     </ul>
        // );
    //     let str = this.props.errors.join()
    //     let arr = str.split(",")
    //     return (
    //         <div className="error-list">
    //             {arr.map(error => (
    //                 <p className="error-item" >{error}</p>
    //             ))}
    //         </div>
    //     )
    // }

    //     render() {
    //         return (
    //             <div className="background">
    //                 <Link to='/signup'><button className="switch-paths">Sign Up</button></Link>
    //                 <div className="login-form-container">
    //                     <form onSubmit={this.handleSubmit} className="login-form-box">
    //                         <Link to="/" style={{ textDecoration: 'none' }}><h2 className="home-page-logo">qadlee</h2></Link>
    //                         <p className="home-page-message">Come for what you love.</p>
    //                         <p className="home-page-message">Stay for what you discover.</p>
    //                         <div className="login-form">
    //                             <br/>
    //                             <input type="text"
    //                                 placeholder="  Username"
    //                                 value={this.state.username}
    //                                 onChange={this.update('username')}
    //                                 className="login-input"
    //                             />
    //                             <br />
    //                             <input type="text"
    //                                 placeholder="  Password"
    //                                 value={this.state.password}
    //                                 onChange={this.update('password')}
    //                                 className="login-input"
    //                             />
    //                             <br />
    //                             {this.renderErrors()}
    //                             <input className="button" id="signup" type="submit" value="Log In" />
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         );
    //     }
    // }

    renderErrors() {
        return (
            <ul className="error-list">
                {this.props.errors.map((error, i) => (
                    <li className="error-item" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    

    componentDidMount(){
        this.props.clearErrors()
    }

    render() {
        return (
            <div className="background">
                <Link to='/signup'><button className="switch-paths">Sign Up</button></Link>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <Link to="/" style={{ textDecoration: 'none' }}><h2 className="home-page-logo">qadlee</h2></Link>
                        <p className="home-page-message">Come for what you love.</p>
                        <p className="home-page-message">Stay for what you discover.</p>
                        <div className="login-form">
                            <br />
                            <input type="text"
                                placeholder="  Username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                            <br />
                            <input type="text"
                                placeholder="  Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                            <br/>
                            <input className="button" id="signup" type="submit" value="Log In" />
                        </div>
                    </form>
                    <div className="error-messages">
                        {this.renderErrors()}
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
