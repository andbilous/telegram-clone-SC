// @flow
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, Alert, TextInput, TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { setName, setPhone } from '../redux/userProfile/userProfile.actions';
import { goToContactsPage } from '../redux/router/router.actions';

type Props ={
  data:Array,
  goToProfilePage:()=>{},
  setNameAction:()=>{},
  setPhoneAction:()=>{},
  goToContactsPage:()=>{}
}

const Profile = ({
  data, setNameAction, setPhoneAction, goToContactsPage
}:Props) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const RightArrow = () => (
    <TouchableOpacity onPress={goToContactsPage}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/right-arrow.png' }}
      />
    </TouchableOpacity>
  );
  const onChangeName = (value) => {
    setName(value);
  };
  const onChangePhone = (value) => {
    setPhone(value);
  };
  const onSaveValues = () => {
    setNameAction(name);
    setPhoneAction(phone);
    Alert.alert('New Values Has Been Saved');
  };
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'PROFILE PAGE', style: { color: '#fff' } }}
        rightComponent={<RightArrow />}
        backgroundColor="#0088cc"
      />
      <View style={styles.formContainer}>
        <Image
          style={styles.image}
          source={{ uri: data.avatar }}
        />
        <Text style={styles.header}>
Hello,
          {data.name}
        </Text>
        <TextInput
          placeholder={data.name}
          style={styles.input}
          value={name}
          onChangeText={(value) => onChangeName(value)}
        />
        <TextInput
          placeholder={data.phone.toString()}
          keyboardType="numeric"
          style={styles.input}
          value={phone}
          onChangeText={(value) => onChangePhone(value.toString())}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={onSaveValues}
        >
          <Text style={styles.textStyle}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  formContainer: {
    marginTop: 50
  },
  header: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 15
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 25
  },
  input: {
    padding: 3,
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  textStyle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center'
  },
  buttonStyle: {
    width: '70%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#202646',
    borderRadius: 5
  }
});
const ProfileContainer = connect(
  (state) => ({
    data: state.userProfileReducer.data
  }), (dispatch) => ({
    setNameAction: (name) => dispatch(setName(name)),
    setPhoneAction: (phone) => dispatch(setPhone(phone)),
    goToContactsPage: () => dispatch(goToContactsPage())
  })
)(Profile);

export { ProfileContainer as Profile };
