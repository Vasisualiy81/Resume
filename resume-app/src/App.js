import React, {Component} from 'react';
import './App.css';

import PersonalData from './components/PersonalData/PersonalData';
import SocialNet from './components/SocialNet/SocialNet';
import EducationItem from './components/EducationItem/EducationItem';
import Skills from './components/Skills/Skills';
class App extends Component {

    renderPersonalData() {
        return (
            this.getPersonalData().map((value, index) =>
                (< PersonalData
                    pathToImage={value.pathToImage}
                    alt={value.alt}
                    h3Content={value.h3Content}
                    spanContent={value.spanContent}
                    key={index}
                />))
        );
    };

    renderSocialNet() {
        return (
            this.getSocialNet().map((value, index) =>
                (<SocialNet
                    href={value.href}
                    pathToImage={value.pathToImage}
                    alt={value.alt}
                    key={index}
                />))
        );
    };

    renderEducationItem() {
        return (
            this.getEducationItem().map((value, index) =>
                (<EducationItem
                    pathToImage={value.pathToImage}
                    alt={value.alt}
                    spanContent={value.spanContent}
                    pContent={value.pContent}
                    key={index}
                />))
        );
    };

    renderSkills() {
        return (
            this.getSkillsTitle().map((value, index) =>
                (<Skills
                    pathToImage={value.pathToImage}
                    alt={value.alt}
                    key={index}
                />))
        );
    };

    render() {
        return (
            <div className="App">
                <div className="mainContainer">
                    <div className="header">
                        <div className="filter">
                            <div className="title "></div>
                            <div className="title ">
                                <span>Resume</span>
                                <span>Trainee Developer</span>
                            </div>
                            <div className="title "></div>
                        </div>
                    </div>
                    <div className="contentContainer">
                        <div className="profileContainer">
                            <div className="profilePicture">
                                <div className="gradient">
                                    <div className="fullName ">
                                        <span>vasiliy don</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shortDescription">
                                <div className="title3"> contact & personal info</div>
                                {this.renderPersonalData()}
                                <div className="title3"> social contacts</div>
                                <div className="socialContainer">
                                    {this.renderSocialNet()}
                                </div>
                            </div>

                        </div>
                        <div className="descriptionContainer">
                            <div className="additionalEducationContainer">
                                <div className="headerEducationContainer">
                                    <span> Additional education</span>
                                </div>
                                {this.renderEducationItem()}

                            </div>
                            <div className="additionalEducationContainer">
                                <div className="headerEducationContainer">
                                    <span> About</span>

                                </div>
                                <div className="educationItem">
                                    <div className="titleOfeducationItem">
                                        <p>English - Pre Intermediate.</p>
                                        <p> I am fond of mountain tourism (successful climbing Elbrus, Kazbek, etc.), I
                                            like to travel and play the guitar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skillsContainer">
                            {this.renderSkills()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getPersonalData() {
        const personalData = [
            {
                pathToImage: require('./assets/icons/home.png'),
                alt: "home",
                h3Content: "Location:",
                spanContent: "Ukrain, Zaporojie"
            },
            {
                pathToImage: require('./assets/icons/phone.png'),
                alt: "phone",
                h3Content: "Phone:",
                spanContent: "+38 050 428-0-427"
            },
            {
                pathToImage: require('./assets/icons/email.png'),
                alt: "email",
                h3Content: "Email:",
                spanContent: "donvasilyok@gmail.com"
            },
            {
                pathToImage: require('./assets/icons/cake.png'),
                alt: "birthday",
                h3Content: "Birthday:",
                spanContent: "02 Jule 1981"
            }
        ]
        return personalData;
    }

    getSocialNet() {
        const socialNet = [
            {
                href: "https://www.facebook.com/vasily.don",
                pathToImage: require('./assets/icons/facebook.png'),
                alt: "facebook"
            },
            {
                href: "https://www.instagram.com/vasilydon/",
                pathToImage: require('./assets/icons/instagram2.png'),
                alt: "instagram"
            },
            {
                href: "https://www.linkedin.com/in/vasiliy-don-93181917a/",
                pathToImage: require('./assets/icons/linkedin.png'),
                alt: "linkedin"
            },
            {
                href: "https://github.com/Vasisualiy81?tab=repositories",
                pathToImage: require('./assets/icons/github.png'),
                alt: "github"
            }
        ]
        return socialNet;
    }

    getEducationItem() {
        const educationItem = [
            {
                pathToImage: require('./assets/icons/shag.png'),
                alt: "iStep",
                spanContent: "Computer Academy STEP",
                pContent: "18.04.2017 - now in the specialty \"Software Development\""
            },
            {
                pathToImage: require('./assets/icons/knutd.png'),
                alt: "KNUTD",
                spanContent: "Kyiv National University of Technologies and Design",
                pContent: "01.10.2006 - 2008 in the specialty \"Enterprise Economics\""
            }
        ]
        return educationItem;
    }

    getSkillsTitle() {
        const skillsTitle = [
            {
                pathToImage: require('./assets/icons/web.png'),
                alt: "WEB"
            },
            {
                pathToImage: require('./assets/icons/js.png'),
                alt: 'JS'
            },

        ]
        return skillsTitle;
    }
}

export default App;
