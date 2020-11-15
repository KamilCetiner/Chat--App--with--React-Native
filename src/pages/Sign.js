import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import {authStyle} from '../styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';


const Sign = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  async function sign() {

    console.log( password)

    if (password === passwordRepeat) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        props.navigation.goBack();
      } catch (error) {
        console.log(error)
        Alert.alert('ChatApp', 'An error occured');
      }
    } else {
      
      Alert.alert('ChatApp', 'Passwords are not match');
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require('../assets/buble.png')}
            />
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Type your email address..',
                keyboardType: 'email-address',
              }}
              onValue={(value)=> setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password..',
                secureTextEntry: true,
              }}
              onValue={(value)=> setPassword(value)}
            />

            <Input
              inputProps={{
                placeholder: 'Type your password again..',
                secureTextEntry: true,
              }}
              onValue={(value) => setPasswordRepeat(value)}
            />

            <Button title="Create account" onPress={() => sign()} />
            <Button
              title="Cancel"
              noBorder
              onPress={() => props.navigation.goBack()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Sign};