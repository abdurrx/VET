import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Message = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* Back Section */}
      <View style={[styles.btn_back, { justifyContent: 'center' }]}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name='arrow-left' color={'#fff'} size={20} />
          <Text style={styles.txt_back}> Kembali</Text>
        </TouchableOpacity>
      </View>

      {/* Send Section */}
      <View style={{ justifyContent: 'center', top: 600 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 24 }}>
          <TextInput
            style={styles.input}
            placeholder='Type your message here'
            placeholderTextColor='#7D7D7D'
          />
          <TouchableOpacity style={{ marginLeft: -33 }}>
            <Icon name='send' size={20} color={'#9F9F9F'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  btn_back: {
    width: '100%',
    height: 90,
    backgroundColor: '#1A3150'
  },

  txt_back: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  input: {
    backgroundColor: '#F1F1F1',
    color: '#000',
    width: 312,
    height: 41,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    paddingHorizontal: 16,
    borderRadius: 4,
  },
})

export default Message