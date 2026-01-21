

import Menucard from "../component/Menucard";


const Menucode = () => {

    const menuItems = () => [
        { img: "/assets/menu-1.jpg" , name: "master chef", price: "$100", text: "psum ipsum clita erat amet dolor justo diam" },
        { img: "/assets/menu-2.jpg", name: "master chef", price: "$100", text: "psum ipsum clita erat amet dolor justo diam" },
        { img: "/assets/menu-3.jpg", name: "master chef", price: "$100", text: "psum ipsum clita erat amet dolor justo diam" },
        { img: "/assets/menu-4.jpg", name: "master chef", price: "$100", text: "psum ipsum clita erat amet dolor justo diam" },
 { img: "/assets/menu-5.jpg" , name: "master chef", price: "$100", text: "psum ipsum clita erat amet dolor justo diam" },
        { img: "/assets/menu-6.jpg", name: "master chef", price: "$100", text: "psum ipsum clita erat amet dolor justo diam" },
        { img: "/assets/menu-7.jpg", name: "master chef", price: "$100", text: "psum ipsum clita erat amet dolor justo diam" },
        { img: "/assets/menu-8.jpg", name: "master chef", price: "$100", text: "psum ipsum clita erat amet dolor justo diam" },
    ];

    return (
        <>
       
       
        <div className="menu-header">
              <div class="menu-heading">
                        <p className="heading">-food menu-</p>
                        <h2>most popular item</h2>
                    </div>
                    <div class="main-menu-icn">

                        <div class="menu-icn">
<a href=""><i class="fa-solid fa-mug-hot"></i></a>
                            <span>popular breakfast</span>
                        </div>
                          <div class="menu-icn">
<a href=""><i class="fa-solid fa-mug-hot"></i></a>
                            <span>popular breakfast</span>
                        </div>
                          <div class="menu-icn">
<a href=""><i class="fa-solid fa-mug-hot"></i></a>
                            <span>popular breakfast</span>
                        </div>
                    </div>
        <div className="menu-row">
            {menuItems().map((item, index) => (
                <Menucard
                    key={index}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    text={item.text}
                />
            ))}
        </div>
        </div>
        </>
    );
};

export default Menucode;
