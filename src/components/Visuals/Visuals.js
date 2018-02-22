import React, { Component } from 'react';
import PIXI from 'pixi.js';
import { Stage, Layer, Ring, Text, Group} from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
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
        fill={this.state.color}
        shadowBlur={5}
        draggable="true"
        onClick={this.handleClick}
      />
      </Group>
    );
  }
}

class Visuals extends Component {
  render() {
    return (
      <div className="fun-board">
      <Stage width={500} height={500}>
        <Layer>
          <ColoredRect />
        </Layer>
      </Stage>
      </div>
    );
  }
}


export default Visuals;
