import React from 'react';
import { Link } from "react-scroll";
import Typed from "react-typed";
import AOS from 'aos';

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

const hero = () => {
    return(
        <div className="v-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className="color"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >Welcome to My Portfolio
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big mb-0"><span className="color">Gary Rosen</span></div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={["a Freelancer, ", "a Designer," , "and a Programmer."]}
                                startDelay={1500}
                                typeSpeed={80}
                                backSpeed={30}
                                backDelay={1200}
                                loop
                              />
                        </div>

                        <button className="btn-main mt-3">
                            <Link className="nav-link transition" spy to="resume">
                                My Resume
                            </Link>
                        </button>
                    </div>

                    <div className="col-md-6">
                        <img src="./img/misc/1.png" className="img-fluid" alt="imghero"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;