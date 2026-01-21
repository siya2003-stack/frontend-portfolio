import Testimonialcard from "./Testimonialcard";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const Testimonialsection = () => {
    const team = () => [
       { img: "/assets/team-1.jpg" , name: "master chef", proffession: "chef", icon1: <FaInstagram/> , icon2: <FaFacebook/>,icon3: <FaTwitter />},
        { img: "/assets/team-2.jpg" , name: "master chef", proffession: "chef",icon1: <FaInstagram/> , icon2: <FaFacebook/>,icon3: <FaTwitter /> },
          { img: "/assets/team-1.jpg" , name: "master chef", proffession: "chef",icon1: <FaInstagram/> , icon2: <FaFacebook/>,icon3: <FaTwitter /> },
        { img: "/assets/team-2.jpg" , name: "master chef", proffession: "chef",icon1: <FaInstagram/> , icon2: <FaFacebook/>,icon3: <FaTwitter /> },

    ]

return (
    <div className="main-testimonial">
         <div className="testimonial-heading">
                    <p className="heading">
-team members-
                    </p>
                    <h2>our master chef</h2>
                </div>
    <div className="testimonial-row">
         {team().map((member, index) => (
                <Testimonialcard
                    key={index}
                    img={member.img}
                  name={member.name}
proffession={member.proffession}
icon1={member.icon1}
icon2={member.icon2}
icon3={member.icon3}
                />
            ))}
    </div>
    </div>
);
};
export default Testimonialsection;