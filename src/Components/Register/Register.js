import React from 'react';
import { Redirect } from 'react-router-dom';

class Register extends React.Component{

    constructor() {
        super();
        this.state={
            email: '',
            password: '',
            name: '',
            valid:false
        }
    }

    getEmail = (event) => {
        this.setState({email:event.target.value});
    }

    getPassword = (event) => {
        this.setState({password:event.target.value});
    }


    getName = (event) => {
        this.setState({name:event.target.value});
    }

    register = () => {
        
        fetch('https://obscure-hamlet-68007.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
         email: this.state.email,
          password: this.state.password,
          name:this.state.name
      })
        }).then(response => response.json())
         .then(user => {
             if (user.email) {
                 this.props.loadUser(user);
                 console.log(user);
                 this.setState({valid:true});
             }
        })

    }


    render() {
       
        if (this.state.valid) {
            return (<Redirect to="/home" />);
        }
        else {

            return (
                <article className="registerform br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="pa4 black-80">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name"
                                        onChange={this.getName}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                                        onChange={this.getEmail}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                        onChange={this.getPassword}
                                    />
                                </div>

                            </fieldset>
                            <div className="">
                            
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"
                                    onClick={() => this.register()} />
                            
                            </div>

                        </div>
                    </main>
                </article>


            );
        }

  }

}

export default Register;
