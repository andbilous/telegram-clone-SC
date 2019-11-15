import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput
} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

const Profile = ({ data }) => (
  <View>
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => Alert.alert('ea'),
      }}
      centerComponent={{ text: 'Profile Page', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      backgroundColor="pink"
    />
    <View>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: data.avatar }}
      />
      <Text>Name</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={data.name}
      />
      <Text>Phone</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={data.phone}
      />
    </View>

  </View>


);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
const ProfileContainer = connect(
  (state) => ({
    data: state.userProfileReducer.data
  }), null
)(Profile);

export { ProfileContainer as Profile };
