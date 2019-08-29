import React, { Component } from 'react';
import { Container } from 'native-base'
import styles from '../../styles/StyleInModal'
import Modal from 'react-native-modalbox'

export default class NewModal extends Component {
    constructor(props) {
        super(props)
    }
    onPen() {
        this.refs.myModal.open()
    }

    render() {
        return (
            //<Container style={styles.container}>
                <Modal
                    style={styles.modal}
                    position={"top"}
                    ref="myModal"></Modal>
            //</Container>
        );
    }
}