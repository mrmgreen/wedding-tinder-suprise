import React from 'react';
import Meta from './meta';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleOnClick(e) {
    console.log('clicked')
  }

  handleDragStart(e) {
    console.log('handleDragStart', e.clientX, e.clientY);
    e.dataTransfer.setData('profileImage', JSON.stringify({ name: this.props.name }));
  }

  handleOnDrop(e) {
    console.log('handleOnDrop', e.clientX, e.clientY);
    const stringData = e.dataTransfer.getData('profileImage');
    if (stringData) {
      const data = JSON.parse(stringData);
      console.log(data);
    }
  }

  handleDragOver(e) {
    console.log('handleDragOver');
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Main content</h2>
        <div className="image-container"
          onClick={this.handleOnClick}
          onDragStart={this.handleDragStart}
          onDrop={this.handleOnDrop}
          onDragOver={this.handleDragOver}
        >
          <img src={this.props.image} />
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
}

export default MainContent;
