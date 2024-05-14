import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleNewAppointment = () => {
    console.log('You pressed the button!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.buttonNewAppointment}>
        <Text style={styles.buttonTextNewAppointment}>Nueva Cita</Text>
      </Pressable>

      <Modal animationType="slide" visible={modalVisible}>
        <Text>From Modal</Text>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F&',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  buttonNewAppointment: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  buttonTextNewAppointment: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
