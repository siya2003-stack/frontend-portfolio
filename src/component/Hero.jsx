const Hero = () => {
    return (
<section className="hero-banner">
        <div className="container-fluid">
            <div className="row">

                <div className="banner-bg">
                    <div className="banner-hide"></div>
                    <div className="banner-img">
                        <img src="/assets/hero-bg.png" alt="#" className="banner-image" />
                    </div>
                    <div className="banner-txt">
                        <h1 className="hero-heading">Enjoy Our <br /> Delicious Meal</h1>

                        <p className="hero-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem
                            sit exercitationem error obcaecati voluptatibus! Aliquid temporibus aut libero itaque! Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum dolorem nemo officiis at et
                            voluptates nulla ullam libero amet.</p>
                        <button className="secondary-btn">book a table</button>
                    </div>
                </div>


            </div>
        </div>
    </section>
    );
};
export default Hero;