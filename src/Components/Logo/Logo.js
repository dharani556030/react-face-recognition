import React from 'react';
import './styles.css';
class Logo extends React.Component{
    render() {
        return (
            <div className="logo">
                 <img src="logo_img.png" alt="smart brain" width="90%" height="auto" />
            </div>
        );
    }
}

export default Logo;