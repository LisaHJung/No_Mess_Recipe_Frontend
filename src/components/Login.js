import React from "react";

const loginURL = "http://localhost:4000/login";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        if (response.status === 200) {
            this.setState({ error: ''})
          return response.json();
        } else if (response.status === 401) {
          throw new Error("Please try again");
        }
      })
      .then((result) => {
        localStorage.setItem("token", result.token);
        this.props.history.push("/search")
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <form className="login" onSubmit={this.handleSubmit}>
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
        <input type="submit" value="login" />
        {error ? <p>{error}</p> : null}
      </form>
    );
  }
}

export default Login;
