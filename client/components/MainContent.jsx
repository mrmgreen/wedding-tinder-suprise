import React from 'react';
import Meta from './meta';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseMove: false,
      position: this.getImagesInitialPosition(),
    }
  }

  getImagesInitialPosition() {
    const width = 330;
    const height = 330;
    const leftPosOfImage = (window.innerWidth/2) - (width/2);
    const topPosOfImage = (window.innerHeight/2) - (height/2);
    console.log('leftPos ==', leftPosOfImage)

    return {
      left: leftPosOfImage,
      top: topPosOfImage,
      initialPosition: {
        left: leftPosOfImage,
        top: topPosOfImage,
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

    const initLeft = this.state.position.initialPosition.left;
    const newImageLeftCoords = left - x;

    if (newImageLeftCoords- initLeft <= -100) {
      this.setState({ loveHotel: false, position: Object.assign({}, this.state.position, { left: left - x, top: top - y }) });
    } else if (newImageLeftCoords - initLeft >= 100) {
      this.setState({ loveHotel: true, position: Object.assign({}, this.state.position, { left: left - x, top: top - y }) });
    } else {
      this.setState({ loveHotel: null, position: Object.assign({}, this.state.position, { left: left - x, top: top - y }) });
    }
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
        <div className={"image-container" + (this.state.loveHotel === true ? ' loveHotel' : this.state.loveHotel === false ? ' noLoveHotel' : '')}
          ref={node => this.imageNode = node}
          onClick={this.handleOnClick}
          style={{ position: "absolute", left: `${this.state.position.left}px`, top: `${this.state.position.top}px` }}
        >
          <img src={this.props.image} draggable="false" />
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
