import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import MessageCard from '../component/Messenger/MessageCard'

const Messenger = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.head, styles.center]}>
        <Text style={styles.title}>Messenger</Text>
      </View>

      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  head: {
    width: '100%',
    height: 90,
    backgroundColor: '#1A3150',
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default Messenger