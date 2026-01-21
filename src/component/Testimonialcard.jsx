const Testimonialcard = ({img,name,proffession,icon1, icon2,icon3}) => {
    return (
<section className="testimonial">
    <div className="container">
        <div className="row">
            <div className="testimonial-main">
               
                <div className="testimonial-card">
                   <div className="test-card">
                    <div className="test-card-header">
                        <img src={img} alt={name} />
                                        <h4>{name}</h4>
                    <p className="heading">{proffession}</p>
                    </div>
                    <div className="test-card-footer">
                        <span>{icon1}</span>
                        <span>{icon2}</span>
                        <span>{icon3}</span>
                    </div>
                    

                   </div>
                </div>
            </div>
        </div>
    </div>
</section>

    );
};
export default Testimonialcard;