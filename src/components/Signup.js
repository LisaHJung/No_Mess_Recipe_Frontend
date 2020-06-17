import React from "react";

const usersURL = "http://localhost:4000/users";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(usersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: this.state }),
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("token", result.token);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <form className="signup" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={this.handleChange}
        />
        <input type="submit" value="sign up" />
      </form>
    );
  }
}

export default Signup;
