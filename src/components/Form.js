import React from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const Form = ({ modalVisible }) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>
          Nueva {''}
          <Text style={styles.titleBold}>Cita</Text>
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Nombre Paciente</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Paciente"
            placeholderTextColor={'#666'}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  titleBold: {
    fontWeight: '900',
  },
  field: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
});

export default Form;
