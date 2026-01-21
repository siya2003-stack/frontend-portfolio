import Hero from "../component/Hero";

import Servicecard from "../component/Servicecard";
// import { FaUser } from "react-icons/fa";
// import {FaUtensils} from "react-icons/fa";
// import {FaShoppingCart} from "react-icons/fa";
// import {FaHeadset} from "react-icons/fa";
import { FaUser, FaUtensils, FaShoppingCart, FaHeadset } from "react-icons/fa";




const Service = ({limit,showHeading=true}) => {
    const item = [
     {icon:<FaUser />, title:"master chef" , text:"hloosjdhsuh hshsa jaiuq  hausqu a gdebsysa susiq"},
      {icon:<FaUtensils  />, title:"master chef" , text:"hloosjdhsuh hshsa jaiuq  hausqu a gdebsysa susiq"},
       {icon:<FaShoppingCart />, title:"master chef" , text:"hloosjdhsuh hshsa jaiuq  hausqu a gdebsysa susiq"},
        {icon:<FaHeadset  />, title:"master chef" , text:"hloosjdhsuh hshsa jaiuq  hausqu a gdebsysa susiq"}, 
        {icon:<FaUser />, title:"master chef" , text:"hloosjdhsuh hshsa jaiuq  hausqu a gdebsysa susiq"},
           {icon:<FaUtensils  />, title:"master chef" , text:"hloosjdhsuh hshsa jaiuq  hausqu a gdebsysa susiq"},
       {icon:<FaShoppingCart />, title:"master chef" , text:"hloosjdhsuh hshsa jaiuq  hausqu a gdebsysa susiq"},
        {icon:<FaHeadset  />, title:"master chef" , text:"hloosjdhsuh hshsa jaiuq  hausqu a gdebsysa susiq"}
    ];
    return (
        <>
      
        <Hero />
        <div className="service-section">
           { showHeading && (
                 <div className="service-heading">
                <p>-our service-</p>
                <h2>explore our services</h2>
            </div>
            )
        }
           
                    <div className="service-row">
          
            {(limit ? item.slice(0,limit):item).map((item,index) => (
                <Servicecard 
                key = {index}
                icon={item.icon}
                title={item.title}
                text={item.text}
                />
            ))}
        </div>
        </div>
</>
    );
};
export default Service;