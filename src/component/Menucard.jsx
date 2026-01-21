const Menucard = ({ img, name, price, text }) => {
    return (
        <div className="menu-card">
            <div className="menucard-img">     
                <img src={img} alt={name} /></div>

            <div className="menu-card-header">

                <div className="menu-card-heading">
                    <h2>{name}</h2>
                    <span>{price}</span> <br />
                </div>
                <div className="menu-card-info">
                    <p>{text}</p>
                </div>

            </div>


        </div>
    );
};
export default Menucard;