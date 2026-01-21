import { useState } from "react";

const Reservation = () => {

    const [user, setuser] = useState({
        name: "",
        email: "",
    });

    const [error, seterror] = useState("");

    const handlechange = (e) => {
        const { name, value } = e.target;
        setuser({
            ...user,
            [name]: value
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        seterror("");

        if (user.name.trim() === "") {
            seterror("please enter your name");
            return;
        }
        else if (user.name.length < 3) {
            seterror("letter should be minimum 3");
            return;
        }

        const mailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (user.email.trim() === "") {
            seterror("please enter your email");
            return;
        }
        else if (!mailReg.test(user.email)) {
            seterror("please enter valid email");
            return;
        }

        seterror("");
        alert("Form Submitted");
    };

    return (
        <section className="Reservation">
            <div className="container-fluid">
                <div className="row">
                    <div className="main-Reservation">

                        <div className="Reservation-vdo-box">
                            <div className="video">
                                <video
                                    src="video/3196176-uhd_3840_2160_25fps.mp4"
                                    width="40%"
                                    height="40%"
                                    controls
                                    poster="/assets/video.jpg"
                                ></video>
                            </div>
                        </div>

                        <div className="Reservation-cntct-box">
                            <div className="main-cntct">

                                <div className="reservation-heading">
                                    <p className="heading">reservation-</p>
                                    <h2>book a table online</h2>
                                </div>

                                <div className="cntct">
                                    <form action="" onSubmit={handlesubmit}>

                                        {error && <p style={{ color: "red" }}>{error}</p>}
<div className="cntct1">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={user.name}
                                            onChange={handlechange}
                                        />

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            value={user.email}
                                            onChange={handlechange}
                                        />
                                        </div>
                                        <div className="cntct2">
                                            <input type="datetime-local" />
                                            <input type="number" placeholder="number of people" />
                                        </div>

                                        <div className="cntct-btn">
                                            <button className="primary-btn" type="submit">
                                                book a table
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
