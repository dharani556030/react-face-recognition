import React from 'react';
import './styles.css';
class Facerecognition extends React.Component{
    render() {
        const box = this.props.box;
        return (
            <div className="face">
                <img id="picture" alt="Pictures" src={this.props.image} width="100%" height="auto" />
                <div className="bounding-box" style={{ top: box.top_row, bottom: box.bottom_row, left: box.left_col, right: box.right_col }}>
                </div>
            </div>
        );
     }
}
 
export default Facerecognition;