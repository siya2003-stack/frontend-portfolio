import Testimonialsection from "../component/Testimonialsection";

const Testimonial = () => {
    return (
        <section className="practice">
            <div className="container-fluid">
                <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="1"></button>
                    </div>

                    <div className="carousel-inner">

                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <div className="carousel-main-card">
                                <Testimonialsection />
                            </div>
                        </div>

                        {/* Slide 2 - optional */}
                        <div className="carousel-item">
                            <div className="carousel-main-card">
                                {/* Agar dusre slide me same ya alag content chahiye */}
                                <Testimonialsection />
                            </div>
                        </div>

                    </div>

                    {/* controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;
