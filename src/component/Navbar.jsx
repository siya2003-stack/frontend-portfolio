import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <section className="nav">
            <div className="container-fluid">
                <div className="row">
                    <div className="main-navbar">

                        <div className="logo">
                            <img src="/assets/biteup.jpg" alt="logo_img" className="logo-img" />
                        </div>

                        <div className="list-btn">
                            <div className="nav-list">
                                <ul className="list">
                                    <li className="list-items">
                                        <Link to="/">home</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/about">about</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/services">services</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/menu">menu</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/contact">contact</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-btn">
                                <Link to="/reservation">
                                    <button className="primary-btn">book a table</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
