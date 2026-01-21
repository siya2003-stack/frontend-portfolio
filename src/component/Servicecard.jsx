const Servicecard = ({icon,title,text}) => {
    return (
<section className="master-card">
    <div className="container">
      
           
            <div className="card">
               <span>{icon}</span>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

           

        
    </div>
</section>
    );
};
export default Servicecard;