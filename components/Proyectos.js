import React, { Component } from 'react';

class Proyectos extends Component {
  render() {
    return (
      <div>
          <div className="container text-info"> 
              <div className="row m-2">
                <h3>PROYECTOS</h3>   
            </div>
          </div>

        <div className="card-group">
            <div className="card bg-primary m-0">
              <div className="card-body text-white">
                <img src='' alt=''/>
                <p className="card-text">Some text inside the firsg fgcard</p>
              </div>
            </div>
            <div className="card bg-info m-0 ">
              <div className="card-body text-white text-center">
                <p className="card-text">Some text inside the sec card</p>
              </div>
            </div>
            <div className="card bg-primary m-0">
              <div className="card-body text-white text-center">
                <p className="card-text">Some text inside the third card</p>
              </div>
            </div>
            <div className="card bg-info m-0">
              <div className="card-body text-white text-center">
                <p className="card-text">Some text insiddfdgfgfdgfgcard</p>
              </div>
            </div> 
        </div> 
      </div>
    );
  }
}

export default Proyectos;