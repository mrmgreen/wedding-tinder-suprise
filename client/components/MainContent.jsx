import React from 'react';
import Meta from './meta';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseMove: false,
      position: {
        left: this.props.position.left,
        top: this.props.position.top,
      }
    }
  }
  moveImageToClickPosition (left, top) {
    let x;
    let y;
    if (this.imageNode) {
      const dimensions = this.imageNode.getBoundingClientRect();
      x = dimensions.width/2;
      y = dimensions.height/2
    }
    this.setState({ position: {
      left: left - x,
      top: top - y,
    } })
  }

  componentWillReceiveProps(newProps) {
    const left = newProps.position.left;
    const top = newProps.position.top;
    const oldLeft = this.props.position.left;
    const oldTop = this.props.position.top;

    if (left && top) { left !== oldLeft && top !== oldTop ?
      this.moveImageToClickPosition(left, top)
      : null;
    }
  }

  render() {

    return (
      <div>
        <h2>Main content</h2>
        <div className="image-container"
          onClick={this.handleOnClick}
          style={{ position: "absolute", left: `${this.state.position.left}px`, top: `${this.state.position.top}px` }}
        >
          <img src={this.props.image} draggable="false" ref={node => this.imageNode = node} />
        </div>
        <Meta
          name={this.props.name}
          age={this.props.age}
          bio={this.props.bio}
          occupation={this.props.occupation}
        />
      </div>
    )
  }
}

MainContent.propTypes = {
  image: React.PropTypes.string,
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  bio: React.PropTypes.string,
  occupation: React.PropTypes.string,
  position: React.PropTypes.object,
}

export default MainContent;
