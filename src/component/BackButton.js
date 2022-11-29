import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
  const navigation = useNavigation()
  return (
    <View style={[styles.btn_back, { justifyContent: 'center' }]}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name='arrow-left' color={'#fff'} size={20} />
        <Text style={styles.txt_back}> Sebelumnya</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn_back: {
    backgroundColor: '#1A3150',
    width: '100%',
    height: 90,
  },

  txt_back: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default BackButton