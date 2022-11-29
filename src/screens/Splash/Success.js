import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import Check from '../../assets/Logo/check.png'

const Success = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Dashboard')
  }, 3000)

  return (
    <View style={styles.container}>
      <Image
        source={Check}
        style={styles.img_logo}
      />

      <Text style={styles.txt_sukses}>
        Booking Sukses
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A3150',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img_logo: {
    width: 136,
    height: 136,
    marginBottom: 22,
  },

  txt_sukses: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default Success