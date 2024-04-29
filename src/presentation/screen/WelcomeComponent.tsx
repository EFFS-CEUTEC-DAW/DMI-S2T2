import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export const WelcomeComponent = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const onNameChange = (newName) => {
    setName(newName);
    if (newName === '') {
      setMessage(null);
    }
  };

  const onButtonPress = () => {
    setName('');
    setMessage(null);
  };
  useEffect(() => {
    if (name) {
      setMessage(`Bienvenido, ${name}!`);
    }
  }, [name]);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}> Pantalla de Bienvenida: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={name}
        onChangeText={onNameChange}
      />
      <Button title="Limpiar" onPress={onButtonPress} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 35,
    marginBottom: 15,
  },
  message: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 400,
    borderWidth: 1,
    textAlign: 'left',
    fontSize: 15,
    margin: 5,
    marginBottom: 15,
  },
});
