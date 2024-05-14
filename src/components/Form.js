import React, { useState } from 'react';
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Form = ({ modalVisible }) => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
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
              value={patient}
              onChangeText={setPatient}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={owner}
              onChangeText={setOwner}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Teléfono Propietario"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              style={styles.input}
              placeholder="Síntomas"
              placeholderTextColor={'#666'}
              value={symptoms}
              onChangeText={setSymptoms}
            />
          </View>
        </ScrollView>
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
