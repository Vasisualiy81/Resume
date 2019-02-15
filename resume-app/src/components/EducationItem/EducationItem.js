import React, {Component} from 'react';
import './EducationItem.sass';

class EducationItem extends Component {
    render() {
        return (
            <>
                <div className="EducationItem-container">
                    <div className="EducationItem-icon">
                        <img src={this.props.pathToImage}
                             alt={this.props.alt}
                        ></img>
                    </div>
                    <div className="EducationItem-title">
                        <span>{this.props.spanContent}</span>
                        <p>{this.props.pContent}</p>
                    </div>
                </div>
            </>
        );
    };


};

export default EducationItem;