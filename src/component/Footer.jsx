const Footer = () => {
    return (
<section className="footer">
        <div  className="container-fluid">
            <div className="row">
                <div className="main-footer">
                    <div className="footer-bg">

                        <div className="footer-logo">
                            <div className="logo-img-footer">
                                <img src="/assets/biteup.jpg" alt="logo" class="logo" />
                                <p>BiteUp brings you fresh, delicious, and high-quality food made with love.
Experience the perfect taste in every bite.</p>
                            </div>
                           <div className="footer-icn">
                           <a href=""><i className="fa-brands fa-instagram"></i></a> 
                          <a href=""><i className="fa-brands fa-facebook"></i></a>  
                           <a href=""><i className="fa-brands fa-twitter"></i></a> 
                           </div>
                           

                        </div>
                        <div className="footer-cmpny">
                            <h5>company-</h5>
                            <ul className="cmpny-list">
                                <li className="list-item"><a href="#">about us</a></li>
                                <li className="list-item"><a href="#">contact us</a></li>
                                <li className="list-item"><a href="#">Reservation</a></li>
                                <li className="list-item"><a href="#">privacy policy</a></li>
                                <li className="list-item"><a href="#">erm & conditions</a></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h5>contact-</h5>
                            <ul className="contact-list">
                                <li className="list-item"><a href="#">123 streer, new york,USA</a></li>
                                <li className="list-item"><a href="#">contact us</a></li>
                                <li className="list-item"><a href="#">Reservation</a></li>
                                <li className="list-item"><a href="#">privacy policy</a></li>
                                <li className="list-item"><a href="#">erm & conditions</a></li>
                            </ul>
                        </div>
                        {/* <div className="footer-opening">

                            <h5>opening-</h5>
                            <div className="main-opening">
                                <span><b>monday-saturday</b> <br />09:00am to 09:00pm</span>  <br />
                                <span><b>sunday</b><br />10:00am to 08:00pm</span>
                            </div>

                        </div> */}
                        <div className="footer-newsletter">
                            <h5>newsletter-</h5>
                            <div className="main-newsletter">
                               
                                <input type="email" name="your email" id="#" className="inputtype" placeholder="Your Email"/>
                                <button className="footer-btn-">sign up</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};
export default Footer;