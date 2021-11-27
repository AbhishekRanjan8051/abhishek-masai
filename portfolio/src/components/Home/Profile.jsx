import React from "react";
import Typical from "react-typical";
import "./profile.css";

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="clz">
                        <div className="clz-icon">
                            <a href="https://www.facebook.com/abhishekranjan8051/">
                                <img
                                    alt="facebookicon"
                                    src="https://img.icons8.com/material-rounded/24/000000/facebook.png"
                                />
                            </a>
                            <a href="https://www.instagram.com/abhishekranjan8051/">
                                <img
                                    alt="instagramicon"
                                    src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png"
                                />
                            </a>
                            <a href="https://twitter.com/A_Ranjan8051">
                                <img
                                    alt="twittericon"
                                    src="https://img.icons8.com/material-sharp/24/000000/twitter-squared.png"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/abhishek-ranjan-8051/">
                                <img
                                    alt="linkedinicon"
                                    src="https://img.icons8.com/material-rounded/24/000000/linkedin.png"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="profile-detailsname">
                        <span className="nametext">
                            Hello, I'M{" "}
                            <span className="highlightedtext">Abhishek Ranjan</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="nametext">
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Web Developer 💻 ",
                                        3000,
                                        "MERN Stack Dev 😎 ",
                                        4000,
                                    ]}
                                />
                            </h1>
                            <span className="pofile-tagline">
                                lorem ipsum dolor sit amet lorem ipsum dolor
                            </span>
                        </span>
                    </div>
                    <div className="profile-option">
                        <button className="btn btn-hire">Hire Me</button>
                        <a href="Abhishek_Ranjan_nj2_070.pdf">
                            <button
                                className="btn btn-resume"
                                download="Abhishek_Ranjan_nj2_070.pdf"
                            >
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-bg"></div>
                </div>
            </div>
           
        </div>
    );
}
export { Profile };
