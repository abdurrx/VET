import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import SelectAnimal from './SelectAnimal'

const Tambah = () => {
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
          <Text style={styles.txt_back}> Tambah Hewan Peliharaan</Text>
        </TouchableOpacity>
      </View>

      {/* Label */}
      <Text style={styles.txt_label}>
        Nama Hewan Peliharaan Kamu
      </Text>

      {/* Name Section */}
      <View style={styles.center}>
        <TextInput
          style={styles.input}
          placeholder='Ronald'
          placeholderTextColor='#000'
        />
      </View>

      {/* Label */}
      <Text style={styles.txt_label}>
        Pilih Hewan Peliharaan Kamu
      </Text>

      {/* Select Section */}
      <SelectAnimal />

      {/* Label */}
      <Text style={styles.txt_label}>
        Pilih Kelamin Peliharaan Kamu
      </Text>

      {/* Choose Gender Section */}
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <TouchableOpacity style={[styles.btn_animal, { marginLeft: 16 }, styles.center]}>
          <Icon name='gender-male' size={16} color={'#000'} />
          <Text style={styles.txt_animal}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn_active, { marginLeft: 8 }, styles.center]}>
          <Icon name='gender-female' size={16} color={'#000'} />
          <Text style={styles.txt_animal}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Tambah Section */}
      <View style={[styles.container1, styles.center]}>
        <TouchableOpacity
          style={[styles.btn_tambah, styles.center]}
          onPress={() => navigation.navigate('Detail')}
        >
          <Text style={styles.txt_tambah}>Tambahkan</Text>
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

  txt_label: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 17,
    marginLeft: 16,
  },

  input: {
    backgroundColor: '#F1F1F1',
    width: 328,
    height: 42,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 4,
  },

  btn_active: {
    flexDirection: 'row',
    backgroundColor: '#C2CDDB',
    width: 104,
    height: 36,
    borderRadius: 4,
  },

  btn_animal: {
    flexDirection: 'row',
    backgroundColor: '#E0E9F5',
    width: 104,
    height: 36,
    borderRadius: 4,
  },

  txt_animal: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 8,
  },

  container1: {
    backgroundColor: '#fff',
    width: '100%',
    elevation: 4,
    top: 300,
  },

  btn_tambah: {
    backgroundColor: '#FDCB5A',
    width: 312,
    height: 40,
    marginTop: 16,
    marginBottom: 12,
    borderRadius: 4,
  },

  txt_tambah: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default Tambah