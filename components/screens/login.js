import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Login({ navigation }) {
  const [userName, SetUsername] = useState();
  const [password, Setpassword] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Text style={styles.title}>mango</Text>
        <Text style={styles.tx}>Log to your account</Text>
        <TextInput
          style={styles.in}
          placeholder="User Name"
          onChangeText={(userName) => SetUsername(userName)}></TextInput>
        <TextInput
          style={styles.in}
          placeholder="Password"
          onChangeText={(password) => Setpassword(password)}
          secureTextEntry></TextInput>
        <TouchableOpacity
          style={styles.btn}
          
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
         >
          <Text style={styles.buttonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <Text style={styles.tx1}>NOT A MEMBER YET?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  v1: {
    flex: 5,
    alignItems: 'center',
    backgroundColor: '#30BCB9',
    padding: 100,
  },
  v2: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 60,
    color: 'white',
  },
  tx: {
    fontSize: 15,
    color: 'white',
    padding: 20,
  },
  tx1: {
    color: '#30BCB9',
  },
  in: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#30BCB9',
    padding: 20,
    borderRadius: 10,
    height: 60,
    width: 100,
  },
  buttonText: {
    color: 'white',
  },
  btn: {
    backgroundColor: '#A7E1AE',
    alignItems:'center',
    padding:10,
    height: 50,
    width: 200,
  }
});
