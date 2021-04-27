import React from 'react';
import Particles from 'react-particles-js';
import './styles.css';

  

class ParticlesBackground extends React.Component{
  
    render(){
        return (
          <Particles className="background"
  params={{
    particles: {
      color: {
        value: "#FFFFFF"
      },
      line_linked: {
        color: {
        value: "#FFFFFF"
      }
      },
      number: {
        value: 80
      },
      size: {
        value: 3
      }
    },
    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
  }}
></Particles>
        );
    };
 
}
export default ParticlesBackground;
