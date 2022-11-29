import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import Building from '../../assets/building.png'

const KlinikAgain = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.card}>
      <Image
        source={Building}
        style={styles.img_building}
      />
      <View style={{ marginLeft: 136, marginTop: -107 }}>
        <Text style={styles.txt_batam}>Batam</Text>
        <Text style={styles.txt_klinik}>Klinik Kehewanan</Text>
        <Text style={styles.txt_buka}>Buka: 09.00 - 20.00</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.btn_booknow}>Book Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: 328,
    height: 123,
    borderRadius: 4,
    elevation: 4,
    marginBottom: 16,
  },

  img_building: {
    maxWidth: 124,
    maxHeight: 123,
  },

  txt_batam: {
    color: '#875C25',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  txt_klinik: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  txt_buka: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  btn_booknow: {
    backgroundColor: '#FDCB5A',
    color: '#000',
    width: 180,
    height: 30,
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    textAlign: 'center',
    padding: 5,
    borderRadius: 2,
    marginTop: 9,
  },
})

export default KlinikAgain