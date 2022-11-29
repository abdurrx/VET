import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const DateCard = () => {
  return (
    <View>
      <TouchableOpacity style={[styles.card, { justifyContent: 'center', marginLeft: 16 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.dates, styles.center]}>
            <Text style={styles.txt_dates}>12 Oct</Text>
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.txt_batam}>Batam</Text>
            <Text style={styles.txt_klinik}>Klinik Kehewanan</Text>
            <Text style={styles.txt_waktu}>12:00 - 15:00 Siang</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, { justifyContent: 'center', marginLeft: 16 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.dates, styles.center]}>
            <Text style={styles.txt_dates}>12 Oct</Text>
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.txt_batam}>Jakarta</Text>
            <Text style={styles.txt_klinik}>RS Jiwa Hewan</Text>
            <Text style={styles.txt_waktu}>09:00 - 12:00 Pagi</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, { justifyContent: 'center', marginLeft: 16 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.dates, styles.center]}>
            <Text style={styles.txt_dates}>12 Oct</Text>
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.txt_batam}>Batam</Text>
            <Text style={styles.txt_klinik}>Klinik Kehewanan</Text>
            <Text style={styles.txt_waktu}>12:00 - 15:00 Siang</Text>
          </View>
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
    height: 84,
    elevation: 4,
    marginTop: 12,
  },

  dates: {
    backgroundColor: '#1A3150',
    width: 58,
    height: 60,
    borderRadius: 5,
    marginLeft: 24,
  },

  txt_dates: {
    width: 27,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    numberOfLines: 2,
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

  txt_waktu: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default DateCard