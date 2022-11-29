import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'

import BackButton from '../../component/BackButton'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
  const navigation = useNavigation()
  const [nip, setNip] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(true)

  const [data, setData] = useState({
    nip: '',
    password: '',
  })

  useEffect(() => {
    getData()
    return () => { }
  }, [])

  const getData = async () => {
    try {
      let nip = await AsyncStorage.getItem('nip')
      let password = await AsyncStorage.getItem('password')

      if (nip !== null) {
        // value previously stored
        setData({
          nip: nip,
          password: password
        })
      }
    } catch (e) {
      // error reading value
    }
  }

  const handleLogin = async (value) => {
    console.log('value', value)

    try {
      const response = await axios.post('http://192.168.184.235:3200/users/login', {
        nip: value.nip,
        password: value.password
      })
  
      if (response.data.status == 200) {
        console.log('response', response.data)
        navigation.navigate('Dashboard')
  
        //AsyncStorage.setItem
        await AsyncStorage.setItem('nip', value.nip)
        await AsyncStorage.setItem('password', value.password)
      }
    } catch (error) {
      console.log(error.message)
      ToastAndroid.show("Cek kembali nip dan password", ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.container}>
      {/* Back Section */}
      <BackButton />

      <Text style={styles.title}>Welcome Back</Text>

      {/* Username Section */}
      <Text style={styles.label}>Username</Text>
      <View style={styles.center}>
        <TextInput
          style={styles.input}
          placeholder='Enter your Username'
          placeholderTextColor='#fff'
          onChangeText={(nip) => setNip(nip)}
          value={nip}
        />
      </View>

      {/* Password Section */}
      <Text style={styles.label}>Password</Text>
      <View style={[styles.center, { flexDirection: 'row' }]}>
        <TextInput
          style={[styles.input, { marginHorizontal: -13 }]}
          placeholder='Enter your Password'
          placeholderTextColor='#fff'
          secureTextEntry={passwordVisible}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />

        {/* Eye Section */}
        <TouchableOpacity style={{ marginLeft: -20, marginTop: -4 }}>
          <Icon
            name={passwordVisible ? 'eye-off' : 'eye'} color='#fff' size={20}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        </TouchableOpacity>
      </View>

      {/* Forget Section */}
      <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
        <Text style={styles.txt_forget}>Forget password?</Text>
      </TouchableOpacity>

      <View style={styles.center}>
        {/* Submit Section */}
        <TouchableOpacity
          style={styles.btn_submit}
          onPress={async () => {
            if (nip == '' || password == '') {
                ToastAndroid.show("Data tidak boleh kosong", ToastAndroid.SHORT);
            } else if (nip == data.nip || password == data.password) {
              ToastAndroid.show('NIP atau Password Salah', ToastAndroid.SHORT);
            } else {
                handleLogin({ nip: nip, password: password })
            }
          }}
        >
          <Text style={styles.txt_submit}>Submit</Text>
        </TouchableOpacity>

        {/* Register Section */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.txt_signup}>Don't have an account? <Text style={{ color: '#FDCB5A', textDecorationLine: 'underline', }}>Please Sign Up</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A3150',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 11,
    marginLeft: 24,
  },

  label: {
    color: '#F8F8F8',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 24,
    marginTop: 20,
    marginBottom: 4,
  },

  input: {
    backgroundColor: '#1A3150',
    color: '#fff',
    borderColor: '#749DD2',
    width: 312,
    height: 42,
    fontSize: 12,
    paddingHorizontal: 15,
    marginBottom: 4,
    borderWidth: 1,
    borderRadius: 4,
  },

  txt_forget: {
    color: '#FDCB5A',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
    marginLeft: 237,
    marginTop: 8,
    marginBottom: 24,
  },

  btn_submit: {
    backgroundColor: "#FDCB5A",
    alignItems: "center",
    width: 312,
    height: 40,
    borderRadius: 5,
  },

  txt_submit: {
    color: '#1A3150',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    padding: 9,
  },

  txt_signup: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 16,
  },
})

export default Login