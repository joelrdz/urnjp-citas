import React from 'react';
import { Modal, Text } from 'react-native';

const Form = ({ modalVisible }) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <Text>From Modal</Text>
    </Modal>
  );
};

export default Form;
