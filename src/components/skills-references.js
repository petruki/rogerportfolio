import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../styles/skills-references.scss';

const modalStyle = {
    overlay: {
        backgroundColor: 'black',
        zIndex: 1
    }
};

Modal.setAppElement('#___gatsby');

const SkillsReferences = ({ modalIsOpen, closeModal, img, references }) => {

    function onAfterOpen() {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }

    return ( 
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            onAfterOpen={onAfterOpen}
            style={modalStyle}
            className="Modal"
            contentLabel="Skill Samples">

            <div className="skill-samples-container">
                <img src={img}></img>
                <div id="btnClose" role="button" onClick={closeModal}>close</div> 

                <div className="skill-detail-container">
                {references.map((ref, index) => 
                    <div key={index} className="skill-sample-detail">
                        {'Link: '}
                        <a 
                            href={ref.link} 
                            target="_blank" 
                            rel="noopener noreferrer">{ref.title}
                        </a>
                        <p>{ref.description}</p>
                    </div>)}
                </div>
            </div>
        </Modal>
    );
};

SkillsReferences.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
    references: PropTypes.array.isRequired
};

export default SkillsReferences;