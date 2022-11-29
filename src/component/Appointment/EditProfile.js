import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Gender from './Gender';

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const EditProfile = () => {
  const navigation = useNavigation()

  const [data, setData] = useState({
    nip: '',
    password: '',
    nama: '',
  })

  // console.log('data', data)

  useEffect(() => {
    getData()
    return () => { }
  }, [])

  const getData = async () => {
    try {
      const nip = await AsyncStorage.getItem('nip')
      const response = await axios.get('http://192.168.184.235:3200/users/' + nip)

      if (nip !== null) {
        // value previously stored
        setData({
          nip: nip,
          nama: response.data.nama,
        })
      }
    } catch (e) {
      // error reading value
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.btn_back, { justifyContent: 'center' }]}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name='arrow-left' color={'#fff'} size={20} />
          <Text style={styles.txt_back}> Edit Details</Text>
        </TouchableOpacity>
      </View>

      {/* Basic Section */}
      <View style={[styles.basic, { justifyContent: 'center' }]}>
        <Text style={styles.txt_basic}>
          Basic Information
          <Text style={{ color: '#ED5341' }}>*</Text>
        </Text>
      </View>

      {/* Username Section */}
      <Text style={styles.label}>Nip</Text>
      <TextInput
        style={styles.input}
        value={data.nip}
      />

      <Text style={styles.label}>Nama</Text>
      <TextInput
        style={styles.input}
        value={data.nama}
      />

      {/* Gender Section */}
      <Gender />

      {/* Contact Section */}
      <View style={[styles.basic, { justifyContent: 'center', marginTop: 14 }]}>
        <Text style={styles.txt_basic}>
          Contact Detail
        </Text>
      </View>

      {/* Phone Number Section */}
      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder='+6285805755360'
        placeholderTextColor='#1A3150'
      />

      {/* Email Section */}
      <Text style={[styles.label, { marginTop: 12 }]}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder='abdur.rahmanux@gmail.com'
        placeholderTextColor='#1A3150'
      />

      {/* Pet Information Section */}
      <View style={[styles.basic, { justifyContent: 'center', marginTop: 24 }]}>
        <Text style={styles.txt_basic}>
          Informasi Tentang Hewan Peliharaan
        </Text>
      </View>

      {/* Phone Number Section */}
      <Text style={styles.label}>Jumlah Hewan Peliharaan</Text>
      <TextInput
        style={styles.input}
        placeholder='4 Pets'
        placeholderTextColor='#1A3150'
      />

      {/* Email Section */}
      <Text style={[styles.label, { marginTop: 12 }]}>Waktu Berkunjung untuk Perawatan</Text>
      <TextInput
        style={styles.input}
        placeholder='3 Times'
        placeholderTextColor='#1A3150'
      />

      {/* Tambah Section */}
      <View style={[styles.container1, styles.center]}>
        <TouchableOpacity
          style={[styles.btn_tambah, styles.center]}
          onPress={
            async () => {
              await resetPassword({ nip, nama, password, passwordBaru })
            }
          }
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

  basic: {
    backgroundColor: '#F1F1F1',
    width: '100%',
    height: 33,
    marginBottom: 16,
  },

  txt_basic: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 16,
  },

  label: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 16,
    marginBottom: 4,
  },

  input: {
    backgroundColor: '#fff',
    color: '#1A3150',
    width: 328,
    height: 42,
    paddingHorizontal: 15,
    borderColor: '#749DD2',
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 16,
  },

  txt_gender: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  container1: {
    backgroundColor: '#fff',
    width: '100%',
    elevation: 4,
    top: 23,
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

export default EditProfile