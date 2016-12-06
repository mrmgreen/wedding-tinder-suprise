import React from 'react';
import Login from './login';
import isLoggedIn from '../container/isLoggedIn';
import MainContent from './MainContent';
import Header from './Header';
const path = require('path');
import data from '../../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: isLoggedIn.get(),
      name: null,
      age: null,
      image: null,
      bio: null,
      occupation: null,
    }
    this.logMeIn = this.logMeIn.bind(this);
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

  render() {
    const login = <Login name="hi" login={this.logMeIn} />;
    const mainContent =
    <MainContent
      image={this.state.image}
      name={this.state.name}
      age={this.state.age}
      bio={this.state.bio}
      occupation={this.state.occupation}
    />;
    let content = this.state.loggedIn === false ? mainContent : login;
    return (
      <div className="iphone">
        <div className="content-container">
          <Header />
          {content}
        </div>
      </div>
    )
  }
}

App.proptTypes = {
  params: React.PropTypes.object,
}
export default App;
