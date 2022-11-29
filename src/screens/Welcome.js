import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Logo from '../assets/Logo/icon.png'
import VET from '../assets/Logo/vet.png'

import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={Logo}
        style={styles.img_logo}
      />

      {/* V E T */}
      <Image
        source={VET}
        style={styles.img_vet}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.btn_login} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.txt_login}>Login</Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity style={styles.btn_register} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.txt_register}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A3150',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img_logo: {
    width: 173,
    height: 69,
    marginTop: 80,
  },

  img_vet: {
    width: 60,
    height: 20,
    marginTop: 30,
  },

  btn_login: {
    backgroundColor: "#FDCB5A",
    alignItems: "center",
    width: 312,
    height: 40,
    borderRadius: 5,
    marginTop: 280,
  },

  txt_login: {
    color: '#1A3150',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    padding: 9,
  },

  btn_register: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 312,
    height: 40,
    borderRadius: 5,
    marginTop: 16,
  },

  txt_register: {
    color: '#875C25',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    padding: 9,
  },
})

export default Welcome