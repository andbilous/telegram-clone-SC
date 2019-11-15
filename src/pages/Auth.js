import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Button from '../components/Button';
import { submitForm } from '../redux/auth/auth.actions';

const Auth = ({ submitForm, errors }) => {
  const onSubmit = (credentials) => {
    submitForm(credentials);
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ phone: '', password: '' }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({
          handleChange, handleBlur, handleSubmit, values
        }) => (
          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            <TextInput
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
    lineHeight: 1
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
    marginTop: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cvvField: {
    width: 80
  },
  errorTextStyle: {
    color: 'red',
    marginBottom: 5
  },
  errorInputStyle: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginBottom: 5,
    borderRadius: 6,
  },
});
export default connect((state) => ({
  errors: state.authReducer.errors
}), { submitForm })(Auth);
