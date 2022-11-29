import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import Building from '../../assets/rs.png'

const MessageCard = () => {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Message')}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={Building}
            style={styles.img_rs}
          />
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.txt_label}>RS Kalimanjaro</Text>
              <Text style={styles.txt_time}>1hr</Text>
            </View>
            <Text style={styles.txt_msg}>
              Halo kak, kamu dimana?
              Sudah bisa ke klinik?
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
  },

  img_rs: {
    width: 57,
    height: 57,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10
  },

  txt_label: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 20,
    marginLeft: 20,
  },

  txt_time: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 22,
    marginLeft: 130
  },

  txt_msg: {
    color: 'rgba(0, 0, 0, 0.7)',
    width: 200,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    numberOfLines: 2,
    marginTop: 2,
    marginLeft: 20,
  }
})

export default MessageCard