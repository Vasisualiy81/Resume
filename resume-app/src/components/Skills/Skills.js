import React, {Component} from 'react';
import './Skills.sass';


class Skills extends Component {
    renderGallery(nameTech) {
        return (
            this.getTechIcon(nameTech).map((value, index) =>
                (<img
                    src={value.pathToIcon}
                    alt={value.altIcon}
                    key={value.index}
                ></img>))
        );
    };

    render() {
        return (
            <>
                <div className="Skills-tech-container">
                    <div className="Skills-title-tech">
                        <img src={this.props.pathToImage}
                             alt={this.props.alt}
                        ></img>
                    </div>
                    <div className="Skills-gallery">
                        {this.renderGallery(this.props.alt)}
                    </div>
                </div>
            </>
        );
    };


    getTechIcon(nameTech) {
        let iconsArray;
        switch (nameTech) {
            case 'WEB':
                iconsArray = [
                    {
                        pathToIcon: require('../../assets/icons/html5.png'),
                        altIcon: 'HTML5'
                    },
                    {
                        pathToIcon: require('../../assets/icons/css3.png'),
                        altIcon: 'CSS3'
                    },
                ]
                break;
            case 'JS':
                iconsArray = [
                    {
                        pathToIcon: require('../../assets/icons/nodejs.png'),
                        altIcon: 'Node JS'
                    },
                    {
                        pathToIcon: require('../../assets/icons/npm.png'),
                        altIcon: 'npm'
                    },
                    {
                        pathToIcon: require('../../assets/icons/mongo.png'),
                        altIcon: 'MongoDB'
                    },
                    {
                        pathToIcon: require('../../assets/icons/react.png'),
                        altIcon: 'React'
                    },
                ]


        }
        return iconsArray;
    }


};

export default Skills;