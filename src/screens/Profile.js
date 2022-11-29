import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ProfileCard from '../component/Appointment/ProfileCard'

import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={[styles.head, styles.center]}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ProfileCard />

      <View style={[styles.btn_logout, { justifyContent: 'center' }]}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}
          onPress={async () => {
            await AsyncStorage.removeItem('nip')
            await AsyncStorage.removeItem('nama')
            await AsyncStorage.removeItem('password')
            navigation.navigate('Welcome')
          }}
        >
          <Icon name='logout' color={'#000'} size={30} />
          <Text style={styles.txt_logout}> Logout</Text>
        </TouchableOpacity>
      </View>

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

  btn_logout: {
    backgroundColor: '#fff',
    width: 328,
    height: 53,
    marginTop: 12,
    marginLeft: 16,
    elevation: 4,
  },

  txt_logout: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default Profile