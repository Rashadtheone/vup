import React, { Component } from 'react';
import { Stage, Layer, Ring , Group} from 'react-konva';
import Konva from 'konva';

class CD extends Component {
  constructor(props) {
    super(props);
      this.state = {
        color: 'green',
        image: null,
        song: props.song
      };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({song: nextProps.song});
  }

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
    const image = new window.Image()
    image.src = this.state.song.artwork || this.state.song.pic
    image.onload = () => {
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
        draggable ="true"
        rotation={7}
        offsetX= {50}
        offsetY= {25}
        onClick={this.handleClick}
      />
      </Group>
    );
  }
}

class Equalizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: null
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({song: nextProps.song});
  }


  render() {
    return (
      <div className="fun-board">
      <Stage width={500} height={500}>
        <Layer>
          {
            this.state.song && 
            <CD song = {this.props.song}/>
            }
        </Layer>
      </Stage>
      </div>
    );
  }
}


export default Equalizer;
