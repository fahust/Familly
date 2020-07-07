import React, { Component } from 'react';

export default class UserCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false
    }
  }
  
    handleChange = event => {
      this.setState({ username: document.querySelector('#connect-username').value });
      this.setState({ password: document.querySelector('#connect-password').value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const user = {
        username: this.state.username,
        password: this.state.password,
      };
  
      /*axios.post(`http://localhost:3000/user/connect`, { user })
        .then(res => {
          this.props.funcLogin(res.data);
          this.setState({ redirect: true})
        });*/
    };
  
    render() {
      const { redirect } = this.state;
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <div>Connection:</div>
            <input
                placeholder="Nom d'utilisateur"
                aria-label="Nom d'utilisateur"
                aria-describedby="basic-addon2"
                name="name"
                type="text"
                id="connect-username"
                onChange={this.handleChange}
              />
              <input
                placeholder="Mot de passe"
                aria-label="Mot de passe"
                aria-describedby="basic-addon2"
                name="pass"
                type="password"
                id="connect-password"
                onChange={this.handleChange}
              />
              
              <button variant="dark" type="submit">Connecter</button>
          </form>
        </div>
      )
    }
  }


//export default Slider; // Don’t forget to use export default!