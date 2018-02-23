import React, { Component } from 'react';
import { Stage, Layer, Ring, Text, Group} from 'react-konva';
import Konva from 'konva';

class CD extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        songs:[],
        color: 'green',
        image: null
      };
     
  }

  componentDidMount() {
    console.log(this.props.songs)
    // if this.props.song.artwork is falsey, then set it to pic
    const image = new window.Image()
    image.src = this.props.songs.artwork || this.props.songs.pic
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };
    console.log(this.state)
  }

  // move th

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
    const image = new window.Image()
    image.src = this.props.songs.artwork || this.props.songs.pic
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };
  };

  render() {
    return (
      <Group>
      <Ring
        x={200}
        y={200}
        innerRadius={40}
        outerRadius={70}
        width={300}
        height={300}
        stroke={ 'silver'}
        fillPatternImage={this.state.image}
        shadowBlur={5}
        draggable="true"
        rotation={7}
        onClick={this.handleClick}
      />
      </Group>
    );
  }
}

class Visuals extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    this.state = {
      cdpic: this.props.songs.artwork
    }


    console.log(this.props.songs)
    return (
      <div className="fun-board">
      <Stage width={500} height={500}>
        <Layer>
          <CD songs = {this.props.songs}/>
        </Layer>
      </Stage>
      </div>
    );
  }
}


export default Visuals;
