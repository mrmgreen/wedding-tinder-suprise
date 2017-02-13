import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/login';
import isLoggedIn from './isLoggedIn';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
const path = require('path');
import data from '../../data';
import currentProfile from '../actions';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: isLoggedIn.get(),
      name: null,
      age: null,
      image: null,
      bio: null,
      occupation: null,
      position: { left: 500, top: 200 },
      onMouseMove: false,
    }
    this.logMeIn = this.logMeIn.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  fetchData(person) {
    let promise = new Promise((resolve, reject) => {
      if (data[person].name !== undefined) {
        return resolve(data[person]);
      } else {
        return reject('sorry no data for that person');
      }
    })
    return promise;
  }

  componentDidMount() {
    if (this.props.params && this.props.params.name !== null) {
      this.fetchData(this.props.params.name).then((response) => {
        console.log('returning promise', response);
        this.setState({
          name: response.name,
          age: response.age,
          image: response.image,
          bio: response.bio,
          occupation: response.occupation,
        })
      }).catch((error) => {
        console.error('error with', error.message);
      });
    }
  }

  logMeIn(e){
    isLoggedIn.login();
    this.setState({
      loggedIn: isLoggedIn.get(),
    });
  }

  handleMouseDown (e) {
    const xClick = e.clientX;
    const yClick = e.clientY;
    this.setState({ position: { left: e.clientX, top: e.clientY }, onMouseMove: true });
  }

  handleMouseMove (e) {
    this.setState({ position: { left: e.clientX, top: e.clientY } });
  }

  handleMouseUp (e) {
    this.setState({ onMouseMove: false });

  }

  render() {
    const login = <Login name="hi" login={this.logMeIn} />;
    const mainContent =
    <MainContent
      image={this.state.image}
      name={this.state.name}
      age={this.state.age}
      bio={this.state.bio}
      occupation={this.state.occupation}
      position={this.state.position}
    />;
    let content = this.state.loggedIn === false ? mainContent : login;
    return (
      <div className="iphone"
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.state.onMouseMove ? this.handleMouseMove : null}
        onMouseUp={this.handleMouseUp}
      >
        <div className="content-container">
          <Header />
          {content}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  params: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    currentProfile: state.currentProfile,
  }
}

export default connect(mapStateToProps)(MainContainer);
