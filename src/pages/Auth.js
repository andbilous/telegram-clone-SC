// @flow
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput, ActivityIndicator, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Button from '../components/Button';
import ErrorPage from './ErrorPage';
import { submitForm } from '../redux/auth/auth.actions';

type Props ={
  submitForm:Function,
  isLoading:boolean,
  error:string
}

const Auth = ({ submitForm, isLoading, error }:Props) => {
  const onSubmit = (credentials) => {
    submitForm(credentials);
  };
  if (error.length) {
    return <ErrorPage />;
  }
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 50, height: 50, alignSelf: 'center', marginBottom: 30
        }}
        source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/telegram.png' }}
      />
      <Formik
        initialValues={{ phone: '', password: '' }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({
          handleChange, handleBlur, handleSubmit, values
        }) => (
          <View>
            <Text style={styles.titleText}>Telegram Clone</Text>
            <Text>Enter Phone Number</Text>
            <TextInput
              placeholder="11111"
              keyboardType="numeric"
              style={styles.inputStyle}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            <Text>Enter Password</Text>
            <TextInput
              placeholder="11111"
              keyboardType="numeric"
              secureTextEntry
              style={styles.inputStyle}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button
              handler={handleSubmit}
              title="submit"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    lineHeight: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15
  },
  inputLabel: {
    marginBottom: 3
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 5,
    borderRadius: 6,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 6,
    marginTop: 5,
    textAlign: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
export default connect((state) => ({
  error: state.authReducer.error,
  isLoading: state.authReducer.isLoading
}), { submitForm })(Auth);
