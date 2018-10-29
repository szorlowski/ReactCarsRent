import React from 'react';
import "../styles/content.css";
import "../styles/login.css";


class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content">
        <form className="login">
          <h1>Login Page</h1>
          <p>Email</p>
          <input type="text" id="email"/>
          <p>Password</p>
          <input type="password" id="password"/>
          <br/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default Login;