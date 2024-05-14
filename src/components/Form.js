import React from 'react';
import { Modal, Text } from 'react-native';

const Form = (props) => {
  return (
    <Modal animationType="slide" visible={props.modalVisible}>
      <Text>From Modal</Text>
    </Modal>
  );
};

export default Form;
