// @flow
import React from 'react';
import {
  View, Text,
} from 'react-native';
import { Header } from 'react-native-elements';

const ErrorPage = () => (
  <View>
    <Header
      centerComponent={{ text: 'Error', style: { color: '#fff' } }}
      backgroundColor="red"
    />
    <Text style={{
      color: 'red',
      marginBottom: 5,
      fontSize: 20,
      alignSelf: 'center',
      marginTop: 20,
    }}
    >
               Please Try Again !
    </Text>
  </View>
);

export default ErrorPage;
