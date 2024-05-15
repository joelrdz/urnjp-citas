import React from 'react';
import { Text } from 'react-native';

const Appointment = ({ item }) => {
  const { patient } = item;

  return (
    <Text>{patient}</Text>
  );
};

export default Appointment;