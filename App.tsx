import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>
      <Button
        title="Nueva Cita"
        onPress={() => {
          console.log('You pressed the button!');
        }}
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
});

export default App;
