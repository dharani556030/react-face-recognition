import React from 'react';
import './styles.css';
class InputBar extends React.Component{
    
    constructor(props){
        super(props);
     props.change(true); 
    }
    
    
    render() {
        
    
        return (
            <div >
                
                <p>This Magic Brain will detect faces in your pictures.Give it a try!!!</p>
            <div className="inputbar">
                
                <input type="text" onChange={this.props.getUrl}/>
                <button onClick={()=>this.props.detect()}><b>Detect</b></button>
            </div>
            </div>
                
        );
    }
}

export default InputBar;