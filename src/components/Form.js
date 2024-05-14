import React from 'react';
import { Modal, Text } from 'react-native';

const Form = (props) => {
  const { modalVisible } = props;

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <Text>From Modal</Text>
    </Modal>
  );
};

export default Form;
