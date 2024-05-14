import React from 'react';
import { Modal, Text } from 'react-native';

const Form = () => {
  return (
    <Modal animationType="slide" visible={false}>
      <Text>From Modal</Text>
    </Modal>
  );
};

export default Form;
