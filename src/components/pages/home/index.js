

import React, {Component} from "react"
import Particles from 'react-particles-js';
import "./style.css"
import { Jumbotron, Button } from 'react-bootstrap';


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
        }}>
     </Particles>
     <div className="container">
     <Jumbotron className="jumbo text-center">
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron> 
</div>
      </div>
        )
    }

}

export default Home