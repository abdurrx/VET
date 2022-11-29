import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Cat from '../../assets/Animal/cats.png'

const Animal = () => {
  return (
    <View>
      <View style={styles.animal}>
        <Image
          source={Cat}
          style={styles.img_animal}
        />

        <Text style={styles.txt_animal}>
          Ronald / Male
        </Text>

        <TouchableOpacity style={{ marginRight: 16 }}>
          <Icon name='close' size={20} color={'#000'} />
        </TouchableOpacity>
      </View>

      <View style={[styles.animal, { marginBottom: 20 }]}>
        <Image
          source={Cat}
          style={styles.img_animal}
        />

        <Text style={styles.txt_animal}>
          Reah / Female
        </Text>

        <TouchableOpacity style={{ marginRight: 16 }}>
          <Icon name='close' size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  animal: {
    backgroundColor: '#fff',
    width: 328,
    height: 44,
    elevation: 4,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  img_animal: {
    width: 28,
    height: 28,
    marginLeft: 20,
  },

  txt_animal: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: -120,
  },
})

export default Animal