
import Service from "../Pages/Service";
import Aboutsection from "../component/Aboutsection";
import Menu from "../Pages/Menu";
import Reservation from "../component/Reservation";
 import Testimonial from "../Pages/Testimonial"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Home = () => {
    return (
<>

<Service limit={4} showHeading={false}  />
<Aboutsection />
<Menu />
<Reservation />
<Testimonial />

</>
    );
};
export default Home;