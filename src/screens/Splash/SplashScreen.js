import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

import Logo from '../../assets/Logo/icon.png'
import VET from '../../assets/Logo/vet.png'

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Welcome')
  }, 1000)

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.img_logo}
      />
      
      <Image
        source={VET}
        style={styles.img_vet}
      />
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
    width: 173,
    height: 69,
  },

  img_vet: {
    width: 60,
    height: 20,
    marginTop: 30,
  },
})

export default SplashScreen