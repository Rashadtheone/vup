import React, { Component } from 'react';
import PIXI from 'pixi.js';


class Visuals extends Component {

    static propTypes = {
        zoomLevel: PropTypes.number.isRequired
    };

    constructor( props ) { 
        super(props);
        
        //bind our animate function
        this.animate = this.animate.bind(this);
    }

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Visuals;
