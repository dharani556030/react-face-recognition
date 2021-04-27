import React from 'react';
import ParticlesBackground from './Components/ParticleBackground/ParticleBackground';
import Navigation from './Components/Navigation/Navigation';
import InputBar from './Components/InputBar/InputBar';
import Logo from './Components/Logo/Logo';
import Facerecognition from './Components/Facerecognition/Facerecognition';
import Signin from './Components/Signin/Signin';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Register from './Components/Register/Register';
import Rank from './Components/Rank/Rank';


const initState = {
  link: '',
  imageUrl: '',
  box: {},
  isSignIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      link: '',
      imageUrl: '',
      box: {},
      isSignIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }
  
  calculateBoundaries = (boundaries) => {
    const img = document.getElementById("picture");
    const Width = Number(img.width);
    const Height = Number(img.height);
    return ({
      bottom_row: Height-Height*boundaries.bottom_row,
left_col: Width*boundaries.left_col,
right_col: Width-Width*boundaries.right_col,
top_row:Height*boundaries.top_row
    });
     
   }

  
   loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joinedDate
    }})
  }

  getLink = (event) => {
    this.setState({ link: event.target.value });
    console.log(this.state.link);
  }
  detectUrl=()=> {
    this.setState({ imageUrl: this.state.link});
      fetch('https://obscure-hamlet-68007.herokuapp.com/imageUrl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              link: this.state.link
            })
          })
       .then(response => response.json())
      .then((response) => {
         if (response) {
          fetch('https://obscure-hamlet-68007.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        
        this.setState({ box:
          this.calculateBoundaries(
            response.outputs[0].data.regions[0].region_info.bounding_box
          )
        });
        console.log(this.state.box);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  changeStatus = (status) => {
    this.setState({ isSignIn: status });
    if (!status) {
      this.setState(initState);
    }
   }

  
  render() {
    return (
      <div className="home">
        
        <ParticlesBackground />
        <Router>
          <Navigation status={this.state.isSignIn} changeStatus={this.changeStatus}/>
        <Logo />
       
          <Switch>
          <Route path="/signin">  
              <Signin  loadUser={this.loadUser}/>
          </Route>
            <Route path="/home">
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <InputBar getUrl={this.getLink} detect={this.detectUrl} change={this.changeStatus}/>
            {this.state.imageUrl !== '' && <Facerecognition image={this.state.imageUrl} box={this.state.box} />}
            </Route>
            <Route path="/register">
              <Register  loadUser={this.loadUser}/>
            </Route>  
            <Route exact path="/">
                <Redirect to="/signin" />
            </Route>
         </Switch>
        </Router>
      </div>
    );
  }
}
  export default App;
