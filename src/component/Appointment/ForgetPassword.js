import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ForgetPassword = () => {
  const navigation = useNavigation()

  const [nip, setNip] = useState('')
  const [nama, setNama] = useState('')
  const [password, setPassword] = useState('')
  const [passwordBaru, setPasswordBaru] = useState('')
  const [konfirmasi, setKonfirmasi] = useState('')

  const [passwordVisible, setPasswordVisible] = useState(true)
  const [newPasswordVisible, setNewPasswordVisible] = useState(true)
  const [konfirmasiVisible, setKonfirmasiVisible] = useState(true)

  const [data, setData] = useState({
    nip: '',
    password: '',
    nama: '',
  })

  console.log('nip', data.nip)
  console.log('password', data.password);
  console.log('nama', data.nama);

  useEffect(() => {
    getData()
    return () => { }
  }, [])

  const getData = async () => {
    try {
      let nip = await AsyncStorage.getItem('nip')
      let password = await AsyncStorage.getItem('password')
      let nama = await AsyncStorage.getItem('nama')

      if (nip !== null) {
        // value previously stored
        setData({
          nip: nip,
          password: password,
          nama: nama,
        })
      }
    } catch (e) {
      // error reading value
    }
  }

  const resetPassword = async (value) => {
    console.log('value', value)

    try {
      const response = await axios.put('http://192.168.184.235:3200/users', {
        nip: value.nip,
        nama: value.nama,
        password: value.password,
        passwordBaru: value.passwordBaru,
      })

      if (response.data.status == 200) {
        console.log('response', response.data)
        ToastAndroid.show("Password berhasil diubah", ToastAndroid.SHORT)
      }
    } catch (error) {
      console.log(error.message)
      ToastAndroid.show("Cek kembali nip dan password", ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.container}>
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
        onChangeText={(nip) => setNip(nip)}
        value={nip}
      />

      <Text style={styles.label}>Nama</Text>
      <TextInput
        style={styles.input}
        onChangeText={(nama) => setNama(nama)}
        value={nama}
      />

      <Text style={styles.label}>Password Lama</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={[styles.input, { marginHorizontal: -13 }]}
          secureTextEntry={passwordVisible}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />

        {/* Eye Section */}
        <TouchableOpacity style={{ marginLeft: -20, marginTop: 10 }}>
          <Icon
            name={passwordVisible ? 'eye-off' : 'eye'} color='#000' size={20}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Password Baru</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={[styles.input, { marginHorizontal: -13 }]}
          secureTextEntry={newPasswordVisible}
          onChangeText={(passwordBaru) => setPasswordBaru(passwordBaru)}
          value={passwordBaru}
        />

        {/* Eye Section */}
        <TouchableOpacity style={{ marginLeft: -20, marginTop: 10 }}>
          <Icon
            name={newPasswordVisible ? 'eye-off' : 'eye'} color='#000' size={20}
            onPress={() => setNewPasswordVisible(!newPasswordVisible)}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Konfirmasi Password</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={[styles.input, { marginHorizontal: -13 }]}
          secureTextEntry={konfirmasiVisible}
          onChangeText={(konfirmasi) => setKonfirmasi(konfirmasi)}
          value={konfirmasi}
        />

        {/* Eye Section */}
        <TouchableOpacity style={{ marginLeft: -20, marginTop: 10 }}>
          <Icon
            name={konfirmasiVisible ? 'eye-off' : 'eye'} color='#000' size={20}
            onPress={() => setKonfirmasiVisible(!konfirmasiVisible)}
          />
        </TouchableOpacity>
      </View>

      {/* Tambah Section */}
      <View style={[styles.container1, styles.center]}>
        <TouchableOpacity
          style={[styles.btn_tambah, styles.center]}
          onPress={async () => {
            if (nip == '' || password == '' || passwordBaru == '' || konfirmasi == '') {
                ToastAndroid.show("Data tidak boleh kosong", ToastAndroid.SHORT);
            } else if (nip !== data.nip || password !== data.password) {
                ToastAndroid.show('NIP atau Password Salah', ToastAndroid.SHORT);
            } else if (passwordBaru !== konfirmasi) {
                ToastAndroid.show('Password Baru dan Konfirmasi Password Tidak Sama', ToastAndroid.SHORT);
            } else {
                resetPassword({ nip: nip, nama: nama, password: password, passwordBaru: passwordBaru })
            }
          }}
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

export default ForgetPassword