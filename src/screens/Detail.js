import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'

import BackButton from '../component/BackButton'
import DokterCard from '../component/Booking/DokterCard'
import ScrollView_Kunjungan from '../component/Booking/ScrollView_Kunjungan'
import Animal from '../component/Booking/GetAnimal'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Calendar } from 'react-native-calendars'
import Modal from "react-native-modal"

import Building from '../assets/buildings.png'

const Detail = () => {
  const navigation = useNavigation()
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <BackButton />

      <ScrollView style={{ marginTop: -5 }}>
        <Image
          source={Building}
          style={styles.img_building}
        />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.txt_batam}>Batam</Text>
          <Text style={styles.txt_klinik}>Klinik Kehewanan</Text>
          <Text style={styles.txt_buka}>Buka: 09.00 - 20.00</Text>
          <Text style={styles.txt_rekomendasi}>Rekomendasi Dokter</Text>
        </View>

        <DokterCard />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
          <Text style={styles.txt_kunjungan}>Pilih Waktu Kunjungan</Text>

          <TouchableOpacity
            style={[styles.btn_calendar, styles.center]}
            onPress={() => setShowModal(true)}
          >
            <Text>
              <Icon name='calendar-check' size={16} color={'#1A3150'} />
              <Icon name='menu-down' size={16} color={'#000'} />
            </Text>
          </TouchableOpacity>
          <Modal visible={showModal} animationType="fade">
            <Calendar
              style={{
                borderRadius: 10,
                elevation: 4,
              }}
              onDayPress={date => {
                console.log(date);
                setShowModal(false);
              }}
            />
          </Modal>
        </View>

        <ScrollView_Kunjungan />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
          <Text style={styles.txt_hewan}>Hewan Peliharaan</Text>

          <TouchableOpacity
            style={[styles.btn_tambah, styles.center]}
            onPress={() => navigation.navigate('Tambah')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon name='plus-circle' size={16} color={'#B0ACAC'} />
              <Text style={styles.txt_tambah}> Tambahkan Hewan</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.center}>
          <Animal />
        </View>
      </ScrollView>

      <View style={[styles.container1, styles.center]}>
        <TouchableOpacity
          style={[styles.btn_booknow, styles.center]}
          onPress={() => navigation.navigate('Success')}
        >
          <Text style={styles.txt_booknow}>Book Now</Text>
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

  img_building: {
    width: 360,
    height: 204,
    marginBottom: 19,
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

  txt_rekomendasi: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 20,
    marginBottom: 8,
  },

  txt_kunjungan: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 28,
  },

  btn_calendar: {
    backgroundColor: '#fff',
    width: 72,
    height: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    textAlign: 'center',
    elevation: 4,
    marginTop: 28,
    borderRadius: 4,
  },

  txt_hewan: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 24,
  },

  btn_tambah: {
    backgroundColor: '#fff',
    borderColor: '#FDCB5A',
    width: 145,
    height: 26,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 19,
    marginTop: 24,
  },

  txt_tambah: {
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
  },

  btn_booknow: {
    backgroundColor: '#FDCB5A',
    width: 312,
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 4,
  },

  txt_booknow: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default Detail