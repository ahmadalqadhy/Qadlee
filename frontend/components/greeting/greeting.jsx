import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// const Greeting = ({ login, }) => {
//     const userDemo = {username: 'qadlee', password: 'Qadlee1234$'}
//     return(
//         <>
//             {/* <p><a href="#second-container">second</a></p> */}
//             <Link component={{Greeting#second-container}}className='button'>Home</Link>
//             {/* <NavLink exact to='/todos' className='button' activeClassName='curr'>Todos</NavLink>
//             <NavLink exact to='/todos/new' className='button' activeClassName='curr'>New Todo</NavLink> */}
//             <div className="container" id='first-container'>
//                 <img className="background-img" src="https://www.someprettything.com/wp-content/uploads/2018/04/patrick-tomasso-472279-unsplash.jpg" alt="FirstPic"/>
//                 <div className='splash-page'>
//                     <h2 className="home-page-logo">qadlee</h2>
//                     <p className="home-page-message">Come for what you love.</p>
//                     <p className="home-page-message">Stay for what you discover.</p>
//                     <nav className="login-signup">
//                         <Link to="/signup"><button className="button" id="signup">Get Started</button></Link>
//                         <br />
//                         <Link to="/login"><button className="button">Log In</button></Link>
//                         <br />
//                         <p className="home-page-message"
//                             id="demo-login"
//                             style={{ textDecoration: "underline" }}
//                             onClick={() => login(userDemo)}>Try a Demo Log In</p>
//                     </nav>
//                 </div>
//             </div>
//             <div className="container" id="second-container">
//                 <div className='splash-page' id="second-splash">
//                     <h2 className="home-page-logo" id="just-q">Q</h2>
//                     <br/>
//                     <br/>
//                     <p className="home-page-message" id="easy-to-use">Qadlee is so easy to use that it's hard to explain.</p>
//                     <br/>
//                     <p className="home-page-message" id="easy-to-use-message">We made it really, really simple for people to make a blog and put whatever they want on it. Stories, photos, GIFs, TV shows, links, quips, dumn jokes, smart, jokes, Spotify tracks, mp3s, videos, fashion, art, deep stuff. Qadlee is 501 million different blogs, filled with literally whatever. </p>
//                 </div>
//             </div>
//             <div className="container" id="third-container">
//                 <div className='splash-page' id='third-splash'>
//                     <p className="home-page-message" id="easy-to-use">Qadlee is blogs.</p>
//                     <br/>
//                     <p className="home-page-message" id="easy-to-use-message">Turns out that when you make it easy to create interesting things, that's exactly what people do. All those great, random blogs your friends send you, those are Qadlee blogs. We'll help you find and follow blogs like that, and we'll help other people find and follow yours.</p>
//                 </div>
//             </div>
//             <div className="container" id="fourth-container">
//                 <div className='splash-page' id='fourth-splash'>
//                     <p className="home-page-message" id="easy-to-use">You already know how this works.</p>
//                     <br/>
//                     <p className="home-page-message" id="easy-to-use-message">Once you follow a blog, all of its posts show up in your dashboard, just like you'd expect. See something great? Reblog it to your own blog. Add commenmtary if you like. Make it your own. Other people will do the same to your posts. That's how you meet people here</p>
//                 </div>
//             </div>
//             <div className="container" id="fifth-container">
//                 <div className='splash-page'>
//                     <p className="home-page-message" id="easy-to-use">Seriously, put anything you want here.</p>
//                     <br/>
//                     <p className="home-page-message" id="easy-to-use-message">Seven post types to get you started. Your brain can do the rest. This thing is yours. Use it however you like.</p>
//                 </div>
//             </div>
//             <div className="container">
//                 <img className='background-img' src="https://www.wallpaperup.com/uploads/wallpapers/2015/05/01/676003/5a75ea4d0b36541cb73d3a9cc670d0c1-700.jpg" alt="SecondPic"/>
//                 <div className='splash-page'>
//                     <p className="home-page-message" id="easy-to-use">Okay, it's not actually hard to explain.</p>
//                     <br />
//                     <p className="home-page-message" id="easy-to-use-message">We lied. But now you understand this thing. So come on in.</p>
//                     <nav className="login-signup">
//                         <Link to="/signup"><button className="button" id="signup">Get Started</button></Link>
//                         <br />
//                         <Link to="/login"><button className="button">Log In</button></Link>
//                         <br />
//                         <p className="home-page-message"
//                             id="demo-login"
//                             style={{ textDecoration: "underline" }}
//                             onClick={() => login(userDemo)}>Try a Demo Log In</p>
//                     </nav>
//                 </div>
//             </div>
//         </>

//     );
// };

class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.myDivToFocus1 = React.createRef()
        this.myDivToFocus2 = React.createRef()
        this.myDivToFocus3 = React.createRef()
        this.myDivToFocus4 = React.createRef()
        this.myDivToFocus5 = React.createRef()
        this.myDivToFocus6 = React.createRef()
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
    }

    handleClick1(event) {
        if (this.myDivToFocus1.current) {
            this.myDivToFocus1.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    handleClick2(event) {
        if (this.myDivToFocus2.current) {
            this.myDivToFocus2.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    handleClick3(event) {
        if (this.myDivToFocus3.current) {
            this.myDivToFocus3.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }

    handleClick4(event) {
        if (this.myDivToFocus4.current) {
            this.myDivToFocus4.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    handleClick5(event) {
        if (this.myDivToFocus5.current) {
            this.myDivToFocus5.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    handleClick6(event) {
        if (this.myDivToFocus6.current) {
            this.myDivToFocus6.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }

    render() {

        const userDemo = { username: 'qadlee', password: 'Qadlee1234$' }

        return (
            <>  
                <div className="navButtons">
                    <ul>
                        <li onClick={this.handleClick1}>○</li>
                        <li onClick={this.handleClick2}>○</li>
                        <li onClick={this.handleClick3}>○</li>
                        <li onClick={this.handleClick4}>○</li>
                        <li onClick={this.handleClick5}>○</li>
                        <li onClick={this.handleClick6}>○</li>
                    </ul>
                </div>
                <div ref={this.myDivToFocus1} className="container" id='first-container'>
                    <img className='background-img' src="https://www.wallpaperup.com/uploads/wallpapers/2015/05/01/676003/5a75ea4d0b36541cb73d3a9cc670d0c1-700.jpg" alt="FirstPic" />
                    <div className='splash-page'>
                        <h2 className="home-page-logo">qadlee</h2>
                        <p className="home-page-message">Come for what you love.</p>
                        <p className="home-page-message">Stay for what you discover.</p>
                        <nav className="login-signup">
                            <Link to="/signup"><button className="button" id="signup">Get Started</button></Link>
                            <br />
                            <Link to="/login"><button className="button">Log In</button></Link>
                            <br />
                            <p className="home-page-message"
                                id="demo-login"
                                style={{ textDecoration: "underline" }}
                                onClick={() => this.props.login(userDemo)}>Try a Demo Log In</p>
                        </nav>
                    </div>
                </div>
                <div ref={this.myDivToFocus2} className="container" id="second-container">
                    <div className='splash-page' id="second-splash">
                        <h2 className="home-page-logo" id="just-q">Q</h2>
                        <br />
                        <br />
                        <p className="home-page-message" id="easy-to-use">Qadlee is so easy to use that it's hard to explain.</p>
                        <br />
                        <p className="home-page-message" id="easy-to-use-message">We made it really, really simple for people to make a blog and put whatever they want on it. Stories, photos, GIFs, TV shows, links, quips, dumn jokes, smart, jokes, Spotify tracks, mp3s, videos, fashion, art, deep stuff. Qadlee is 501 million different blogs, filled with literally whatever. </p>
                    </div>
                </div>
                <div ref={this.myDivToFocus3} className="container" id="third-container">
                    <div className='splash-page' id='third-splash'>
                        <p className="home-page-message" id="easy-to-use">Qadlee is blogs.</p>
                        <br />
                        <p className="home-page-message" id="easy-to-use-message">Turns out that when you make it easy to create interesting things, that's exactly what people do. All those great, random blogs your friends send you, those are Qadlee blogs. We'll help you find and follow blogs like that, and we'll help other people find and follow yours.</p>
                    </div>
                </div>
                <div ref={this.myDivToFocus4} className="container" id="fourth-container">
                    <div className='splash-page' id='fourth-splash'>
                        <p className="home-page-message" id="easy-to-use">You already know how this works.</p>
                        <br />
                        <p className="home-page-message" id="easy-to-use-message">Once you follow a blog, all of its posts show up in your dashboard, just like you'd expect. See something great? Reblog it to your own blog. Add commenmtary if you like. Make it your own. Other people will do the same to your posts. That's how you meet people here</p>
                    </div>
                </div>
                <div ref={this.myDivToFocus5} className="container" id="fifth-container">
                    <div className='splash-page'>
                        <p className="home-page-message" id="easy-to-use">Seriously, put anything you want here.</p>
                        <br />
                        <p className="home-page-message" id="easy-to-use-message">Seven post types to get you started. Your brain can do the rest. This thing is yours. Use it however you like.</p>
                    </div>
                </div>
                <div ref={this.myDivToFocus6} className="container">
                    <img className="background-img" src="https://www.someprettything.com/wp-content/uploads/2018/04/patrick-tomasso-472279-unsplash.jpg" alt="Secondpic" />
                    <div className='splash-page'>
                        <p className="home-page-message" id="easy-to-use">Okay, it's not actually hard to explain.</p>
                        <br />
                        <p className="home-page-message" id="easy-to-use-message">We lied. But now you understand this thing. So come on in.</p>
                        <nav className="login-signup">
                            <Link to="/signup"><button className="button" id="signup">Get Started</button></Link>
                            <br />
                            <Link to="/login"><button className="button">Log In</button></Link>
                            <br />
                            <p className="home-page-message"
                                id="demo-login"
                                style={{ textDecoration: "underline" }}
                                onClick={() => this.props.login(userDemo)}>Try a Demo Log In</p>
                        </nav>
                    </div>
                </div>
            </>
        )
    };
};


export default Greeting;
