import React, { Component } from 'react';
import PIXI from 'pixi.js';


export class Visuals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blank: 0,
        }
        this.createCanvas = this.createCanvas.bind(this);
    }
    createCanvas() {
        // let app = new PIXI({width: 500, height: 500}); 
        React.createElement(
            new PIXI({width: "500", height: "500"})
          )
          
    }
    
    
    render() {
        return (
            <div>
                <input type="button" onClick={this.createCanvas} />
            </div>
        );
    }
}

export default Visuals;
