import React from 'react';
import './styles.css';
import { Link,withRouter } from "react-router-dom";

class Signin extends React.Component{
   
    constructor() {
        super();
        this.state={
            email: '',
            password: '',
            //valid:false
        }
    }

    getEmail = (event) => {
        this.setState({email:event.target.value});
    }

    getPassword = (event) => {
        this.setState({password:event.target.value});
    }

    checkDetails = () => {

        fetch('https://obscure-hamlet-68007.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
        }).then(response => response.json())
         .then(user => {
             if (user.email) { console.log(user);
                 this.props.loadUser(user);
                 //this.setState({valid:true});
                 console.log(this.props);
                 this.props.history.push('/home');
             }
            
        })
        
    }

    render() {

    
       /* if (this.state.valid) {
            return (<Redirect to="/home" />);
        }
        else {*/
            return (
                <article className=" signinform br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="pa4 black-80">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                                        onChange={this.getEmail}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                        onChange={this.getPassword} />
                                </div>

                            </fieldset>
                            <div className="">
                            
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"
                                    onClick={() => this.checkDetails()}
                                /></div>
                        
                        
                            <Link to="/register">
                                <div className="lh-copy mt3">
                                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"
                                    />
                                
                                </div>
                            </Link>
                        </div>
                    </main>
                </article>
            
            );
        }
    }



export default withRouter(Signin);