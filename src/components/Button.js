// @flow
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';


type Props ={
  title:string,
  handler:()=>{}
}

const Button = ({ title, handler }:Props) => (
  <TouchableOpacity
    title={title}
    style={title === 'submit' ? styles.submit : styles.forward}
    onPress={handler}
  >
    <Text>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#0088cc',
    padding: 15,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 10
  },
  navigate: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 6,
    marginTop: 5
  },
});
export default Button;
