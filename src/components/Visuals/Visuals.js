import React, { Component } from 'react';
import { Stage, Layer, Ring, Text, Group} from 'react-konva';
import Konva from 'konva';

class CD extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        color: 'green'
      };
     
  }

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
        fillPatternImage={this.props.songs.artwork}
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
    return (
      <div className="fun-board">
      <Stage width={500} height={500}>
        <Layer>
          <CD />
        </Layer>
      </Stage>
      </div>
    );
  }
}


export default Visuals;
