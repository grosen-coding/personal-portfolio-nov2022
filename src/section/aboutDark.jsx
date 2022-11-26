import React from 'react';
import Skillbar from '../layout/skillbar';

import AOS from 'aos';
AOS.init();


const hero = () => {
	return(
		<div className="v-center">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-6">
                    <img src="./img/misc/4.png" className="img-fluid" alt=""/>
                </div>
	            <div className="col-md-6">
	                <h2>About Me</h2>
	                <p>An extensive background in both project and employee management has given me a sharp eye, and strong desire, for problem solving and positive leadership. When I'm not coding, you can find me either designing award-winning residential landscapes and waterfalls, teaching canine behaviour & psychology, or rescuing & rehabilitating last-chance dogs. When I am coding, My specialties are:
	                </p>
	                <div className="d-skills-bar">
	                  <div className="d-bar">
	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>HTML</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={95} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>CSS</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={90} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Javascript</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={80} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>React</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={75} />
	                    </div>
							                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>GSAP</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={40} />
	                    </div>
							                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Debugging</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={90} />
	                    </div>

							                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Accessibility</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={90} />
	                    </div>

	                    <div className="d-skill" data-value="95%" style={{width: "100%"}}>
	                        <div className="d-info">
	                          <span>Responsive Design</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={95} />
	                    </div>

	                    </div>
	                </div>
	            </div>  

			</div>
		</div>
		</div>
	);
}

export default hero;