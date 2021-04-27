import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";
class Navigation extends React.Component{
    
    render()
    {
        const status = this.props.status;
        if (status)
        {
             return (
                <nav className="navbar">
                            
                    <Link to="/signin" onClick={() => this.props.changeStatus(false)} className="f3 dim black underline pa3 pointer">Sign Out</Link>
                        
                
                </nav>
            );
        }
        else {
           return (
                <nav className="navbar">
                    <Link to="/register" onClick={() => this.props.changeStatus(false)} className="f3 dim black underline pa3 pointer">Register</Link>
                    <Link to="/signin" onClick={() => this.props.changeStatus(false)} className="f3 dim black underline pa3 pointer">Sign In</Link>
                        
                
                </nav>
            );
        }
    }
}
export default Navigation;