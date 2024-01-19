import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '400px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

const ModalHeader = styled.div`
    background-color: #61dafb;
    color: white;
    padding: 10px;
    font-weight: bold;
`;

const AlertModal = ({ isOpen, onClose, alerts }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customModalStyles}
            contentLabel="Alert Modal"
        >
            <ModalHeader>Alerts from {alerts[0].sender_name}</ModalHeader>
            <div>
                {alerts.map((alert, index) => (
                    <div key={index}>
                        <h3>Motivation: {alert.event}</h3>
                        <h4>Details:</h4>
                        <p>{alert.description}</p>
                    </div>
                ))}
            </div>
            <button onClick={onClose}>Close</button>
        </Modal>
    );
};

AlertModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    alerts: PropTypes.array.isRequired,
};

export default AlertModal;