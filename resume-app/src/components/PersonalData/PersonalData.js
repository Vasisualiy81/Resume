import React, {Component} from 'react';
import './PersonalData.sass';

class PersonalData extends Component {
    render() {
        return (
            <>
                <div className="PersonalData-container">
                    <img src={this.props.pathToImage} alt={this.props.alt}  ></img>
                    <div className="PersonalData-content">
                        <h3>{this.props.h3Content}</h3>
                        <span> {this.props.spanContent}</span>
                    </div>
                </div>
            </>
        );
    };


};

export default PersonalData;