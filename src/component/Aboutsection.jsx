import { useEffect,useState } from "react";


const Aboutsection = () => {
const [experience, setExperience] = useState(0);
const [showcase ,setshowcase] = useState(false);


const [chef, setChef] = useState(0);

    useEffect(() => {
  let exp = 0;
  let ch = 0;

  const interval = setInterval(() => {
    if (exp < 15) {
      exp++;
      setExperience(exp);
    }

    if (ch < 50) {
      ch++;
      setChef(ch);
    }

    if (exp >= 15 && ch >= 50) {
      clearInterval(interval);
    }
  }, 50);

  return () => clearInterval(interval);
}, []);

    return (
 <section className="aboutus">
        <div className="container-fluid">
            <div className="row">
                <div className="main-abt">
                    <div className="abt-img-group">
                        <div className="abt-img1">
                            <div className="about-img1">
                                  <img src="/assets/about-1.jpg" alt="" className="about-1" />
                            </div>
                             <div className="about-img2">
                                  <img src="/assets/about-2.jpg" alt="" className="about-3" />
                            </div>
                          
                           
                        </div>
                        <div className="abt-img-2">
                             <div className="about-img3">
                                  <img src="/assets/about-3.jpg" alt="" className="about-2" />
                            </div>
                             <div className="about-img4">
                                  <img src="/assets/about-4.jpg" alt="" className="about-4" />
                            </div>
                        </div>
                    </div>
                    <div className="abt-txt">
                        <div className="abt-heading">
                            <p className="heading">about-</p>
                            <h2>Welcome to <i className="fa-solid fa-utensils"></i>Restron</h2>
                        </div>
                        <div className="abt-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi nulla labore iste deleniti vel placeat dolorum quasi exercitationem expedita?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sunt minima tempora commodi tenetur facilis similique deserunt ratione veniam nisi?</p>
                        </div>
                       
<div className="abt-info">
                            <div className="abt-info1">
                                <div className="abt-info-txt">
                                    <span className="infotxt">{experience}</span>
                                    <p>years of <br /> <span>experience</span></p>
                                </div>
                            </div>
                        
                            <div className="abt-info2">
                                  <div className="abt-info-txt">
                                    <span className="infotxt">{chef}</span>
                                    <p>popular <br /><span>Master Chef</span></p>
                                </div>
                            </div>
                        </div>
                      

                       
                        {/* <div className="abt-info">
                            <div className="abt-info1">
                                <div className="abt-info-txt">
                                    <span className="infotxt">15</span>
                                    <p>years of <br /> <span>experience</span></p>
                                </div>
                            </div>
                        
                            <div className="abt-info2">
                                  <div className="abt-info-txt">
                                    <span className="infotxt">50</span>
                                    <p>popular <br /><span>Master Chef</span></p>
                                </div>
                            </div>
                        </div> */}
                        <div className="abt-btn">
                            <button className="primary-btn" onClick={()=>setshowcase(!showcase)}>
                                {showcase ? "Show Less" : "Read More"}
                            </button>
        
{showcase && (
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora quia ut numquam assumenda porro sit quidem nostrum asperiores voluptates!</p>
)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};
export default Aboutsection;