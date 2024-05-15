import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Form from './src/components/Form';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [appointments, setAppointments] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.buttonNewAppointment}>
        <Text style={styles.buttonTextNewAppointment}>Nueva Cita</Text>
      </Pressable>

      {appointments.length === 0 ? (
        <Text style={styles.noAppointments}>No hay citas aún</Text>
      ) : (
        <Text>Si hay citas</Text>
      )}

      <Form
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        appointments={appointments}
        setAppointments={setAppointments}
      />
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
  noAppointments: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
