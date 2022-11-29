import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Alizah from '../../assets/Doctor/alizah.png'
import Jaquin from '../../assets/Doctor/jaquin.png'

const DokterCard = () => {
  const [iconColor, setIconColor] = useState(true)
  return (
    <View style={styles.center}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => setIconColor(!iconColor)}
      >
        <Image
          source={Alizah}
          style={styles.img_dokter}
        />
        <View style={{ marginLeft: 84, marginTop: -54 }}>
          <Text style={styles.txt_spesialis}>Dokter Kucing</Text>
          <Text style={styles.txt_dokter}>Dr. Alizah, SP. Kucing</Text>
          <Text style={styles.txt_buka}>2 years experience</Text>
          <Icon
            style={{ marginTop: -37, marginLeft: 196 }}
            name='checkbox-marked-circle'
            color={iconColor ? '#000' : '#A8A8A8'}
            size={24}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => setIconColor(!iconColor)}
      >
        <Image
          source={Jaquin}
          style={styles.img_dokter}
        />
        <View style={{ marginLeft: 84, marginTop: -54 }}>
          <Text style={styles.txt_spesialis}>Dokter Kucing</Text>
          <Text style={styles.txt_dokter}>Dr. Jaquin, SP. Hewan</Text>
          <Text style={styles.txt_buka}>2 years experience</Text>
          <Icon
            style={{ marginTop: -37, marginLeft: 196 }}
            name='checkbox-marked-circle'
            color={iconColor ? '#A8A8A8' : '#000'}
            size={24}
          />
        </View>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#fff',
    width: 328,
    height: 88,
    borderRadius: 4,
    elevation: 4,
    marginBottom: 12,
  },

  img_dokter: {
    maxWidth: 52,
    maxHeight: 52,
    marginTop: 18,
    marginLeft: 16,
  },

  txt_spesialis: {
    color: '#875C25',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  txt_dokter: {
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
})

export default DokterCard