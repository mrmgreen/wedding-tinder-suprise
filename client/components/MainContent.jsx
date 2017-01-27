import React from 'react';
import Meta from './meta';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    // this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
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
      console.log('dims = ', dimensions)
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

  // handleMouseMove (e) {
  //   const imageBounds = e.target.getBoundingClientRect();
  //   const imageLeft = imageBounds.left;
  //   const imageTop = imageBounds.top;
  //   const xClick = e.clientX - imageLeft;
  //   const yClick = e.clientY - imageTop;
  //   const moveTo = xClick;
  //   console.log('xClick and y', xClick, yClick);
  //   this.setState({ imageLeft: moveTo });
  // }

  handleMouseUp (e) {
    this.setState({ onMouseMove: false });
  }

  render() {

    return (
      <div>
        <h2>Main content</h2>
        <div className="image-container"
          onClick={this.handleOnClick}
          onMouseMove={this.state.onMouseMove ? this.handleMouseMove : null}
          onMouseUp={this.handleMouseUp}
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
