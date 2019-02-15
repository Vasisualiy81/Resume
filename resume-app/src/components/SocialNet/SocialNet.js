import React, {Component} from 'react';
import './SocialNet.sass';

class SocialNet extends Component {
    render() {
        return (
            <>
                <div className="SocialNet-container">
                    <a href={this.props.href} target={"_blank"}>
                        <img className="SocialNet-icon"
                             src={this.props.pathToImage}
                             alt={this.props.alt}></img>
                    </a>
                </div>
            </>
        );
    };


};

export default SocialNet;