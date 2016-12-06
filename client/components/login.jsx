import React from 'react';
import ReactDOM from 'react-dom';

class login extends React.Component {
  render() {
    console.log('this props ===', this.props);
    return (
      <div>
        <label>username</label>
        <input name='username' type='text' />
        <label>password</label>
        <input name='password' type='text' />
        <button onClick={this.props.login}>Login</button>
      </div>
    )
  }
}

login.propTypes = {
  login: React.PropTypes.func,
}

export default login;
