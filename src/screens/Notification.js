import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import DateCard from '../component/Notification/DateCard'
import KlinikAgain from '../component/Notification/KlinikAgain'

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.head, styles.center]}>
        <Text style={styles.title}>Notification</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator>
        <Text style={styles.txt_appointment}>My Appointment</Text>

        <DateCard />

        <Text style={styles.txt_history}>History</Text>

        <View style={styles.center}>
          <KlinikAgain />
          <KlinikAgain />
          <KlinikAgain />
        </View>
      </ScrollView>
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

  txt_appointment: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 35,
    marginLeft: 16,
  },

  txt_history: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 32,
    marginBottom: 12,
    marginLeft: 16,
  },
})

export default Notification