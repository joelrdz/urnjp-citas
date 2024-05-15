import React from 'react';
import { Text, View } from 'react-native';

const Appointment = ({ item }) => {
  const { patient, date } = item;

  const formatDate = date => {
    const newDate = new Date(date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return newDate.toLocaleDateString('es-ES', options);
  };

  return (
    <View>
      <Text>{patient}</Text>
      <Text>{formatDate(date)}</Text>
    </View>
  );
};

export default Appointment;
