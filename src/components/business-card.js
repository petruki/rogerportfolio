import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import getQRCode from '../service/qrcode';

const Header = ({ header }) => {
    const { avatarImg, name } = header;
    return (
        <div className="header">
            <a href={window.location.href.split('?')[0]}>
                <img id="avatar" src={avatarImg} alt="avatar"></img><br />
            </a>
            <h1>{name}</h1>
        </div>
    );
};

const Detail = (props) => {
    const { headerTagline } = props.header;
    const { social, contactEmail } = props.contact;
    return (
        <div className="detail">
            <div className="heading-wrapper">
                {headerTagline.map((header, i) =>
                    <h2 key={i}>{header}</h2>
                )}
            </div>
            <hr/>
            <a className="email-link" href={`mailto:${contactEmail}`}>
                {contactEmail}
            </a>
            <div className="social-icons">
                {social.map((socialLink, index) => (
                <a id="social-icon"
                    key={index}
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={socialLink.img} alt="icons"></img>
                </a>
                ))}
            </div>
        </div>
    );
};

const QRCode = ({ qrCode }) => {
    return (
        <div className="qrcode">
            <a href={window.location.href.split('?')[0]}>
                <img id="qrcode" src={qrCode}></img>
            </a>
        </div>
    );
};

const BusinessCard = ({ contact, header }) => {
    const [qrCode, setQRCode] = useState(undefined);

    useEffect(() => {
        getQRCode(window.location.href)
            .then(data => setQRCode(data));
    }, [qrCode]);

    return (
        <div className="secion">
        {qrCode &&
            <div className="container">
                <div className="business-section">
                    <Fade big>
                    <div className="content">
                        <Header header={header} />
                        <Detail header={header} contact={contact} />
                        <QRCode qrCode={qrCode} />
                    </div>
                    </Fade>
                </div>
            </div>}
        </div>
    );
};

BusinessCard.propTypes = {
    contact: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired
};

Header.propTypes = {
    header: PropTypes.any.isRequired
};

Detail.propTypes = {
    header: PropTypes.any.isRequired,
    contact: PropTypes.any.isRequired
};

QRCode.propTypes = {
    qrCode: PropTypes.any.isRequired
};

export default BusinessCard;
