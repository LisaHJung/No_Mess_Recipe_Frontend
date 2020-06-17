import React from "react";
import Login from "./Login";
import Signup from "./Signup";

class Authenticate extends React.Component {
  state = {
    isLoggedIn: true,
  };

  toggleLoginOrSignUp = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    const { isLoggedIn } = this.state;
    const {history} = this.props
 
    return (
      <div className="authenticate">
        <nav className="navbar navbar-dark fixed-top"> 
        {isLoggedIn ? <Login history={history}/> : <Signup />}
        <button onClick={this.toggleLoginOrSignUp}>
          {isLoggedIn ? "Need to Sign Up?" : "Need to Login?"}
        </button>
        </nav>
      </div>
    );
  }
}

export default Authenticate;
