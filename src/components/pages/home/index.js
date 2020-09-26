

import React, {Component} from "react"
import Particles from 'react-particles-js';
import "./style.css"
class Home extends Component {

    render(){
        return(
            <div>
            <h1>home page</h1>
            <Particles className="particles"
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      /> 
      </div>
        )
    }

}

export default Home