import React, {Component} from 'react'
import {connect} from 'react-redux'
import {connectModal} from 'redux-modal'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import Form from './Form'

class ModalWithForm extends Component {


    render() {
        const {show, message,handleHide} = this.props
        console.log(this.props);
        return (
            <Modal isOpen={show} toggle={handleHide}>
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        );
    }
}

class ModalForm extends Component {
    render() {
        const {name} = this.props
        const WrapperModal = connectModal({name})(ModalWithForm)
        return <WrapperModal/>
    }
}

export default connect((state) => ({modal: state.todo.modal}))(ModalForm);
