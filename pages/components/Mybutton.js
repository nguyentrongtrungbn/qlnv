import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#CC0000',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 85,
    marginRight: 35,
    borderRadius:30,
    width:200,
  },
  text: {
    color: '#ffffff',
  },
});
export default Mybutton;