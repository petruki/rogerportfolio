import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import getQRCode from '../service/qrcode';

const BusinessCard = ({ contact, header }) => {
    const [qrCode, setQRCode] = useState(undefined);

    useState(() => {
        getQRCode(window.location.href)
            .then(data => setQRCode(data));
    });

    return (
        <div className="secion">
        {qrCode ? 
        <div className="container">
            <div className="business-section">
                <div className="content">
                    <Fade big>
                        <div className="header">
                            <a href={window.location.href.split('?')[0]}>
                                <img id="avatar" src={header.avatarImg} alt="avatar"></img><br />
                            </a>
                            <h1>Roger</h1>
                        </div>
                        <div className="detail">
                            <div className="heading-wrapper">
                                <h2>{header.headerTagline[0]}</h2>
                                <h2>{header.headerTagline[1]}</h2>
                                <h2>{header.headerTagline[2]}</h2>
                            </div>
                            <hr/>
                            <a className="email-link" href={`mailto:${header.contactEmail}`}>
                                {header.contactEmail}
                            </a>
                            <div className="social-icons">
                                {contact.social.map((socialLink, index) => (
                                <a id="social-icon"
                                    key={index}
                                    href={socialLink.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={socialLink.img} alt="icons"></img>
                                </a>
                                ))}
                            </div>
                        </div>
                        <div className="qrcode">
                            <img id="qrcode" src={qrCode}></img>
                        </div>
                    </Fade>
                </div>
            </div>
        </div> : ''}
        </div>
    );
};

BusinessCard.propTypes = {
    contact: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired
};

export default BusinessCard;
