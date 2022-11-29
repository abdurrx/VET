import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const ScrollView_Kunjungan = () => {
  return (
    <View>
      <ScrollView style={{ marginTop: 24 }} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginBottom: 8, }}>
          <TouchableOpacity style={[styles.btn_hariActive, { marginLeft: 16 }, styles.center]}>
            <Text style={styles.txt_textActive}>Senin</Text>
            <Text style={styles.txt_textActive}>12 Okt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn_hari, { marginLeft: 16 }, styles.center]}>
            <Text style={styles.txt_text}>Selasa</Text>
            <Text style={styles.txt_text}>13 Okt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn_hari, { marginLeft: 16 }, styles.center]}>
            <Text style={styles.txt_text}>Rabu</Text>
            <Text style={styles.txt_text}>14 Okt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn_hari, { marginLeft: 16 }, styles.center]}>
            <Text style={styles.txt_text}>Kamis</Text>
            <Text style={styles.txt_text}>15 Okt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn_hari, { marginLeft: 16, marginRight: 16 }, styles.center]}>
            <Text style={styles.txt_text}>Jum'at</Text>
            <Text style={styles.txt_text}>16 Okt</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ScrollView style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginBottom: 8, }}>
          <TouchableOpacity style={[styles.btn_jam, { marginLeft: 16 }, styles.center]}>
            <Text style={styles.txt_text}>09.00 - 12.00 Pagi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn_jamActive, { marginLeft: 16 }, styles.center]}>
            <Text style={styles.txt_textActive}>12.00 - 15.00 Siang</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn_jam, { marginLeft: 16 }, styles.center]}>
            <Text style={styles.txt_text}>15.00 - 18.00 Sore</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn_jam, { marginLeft: 16, marginRight: 16 }, styles.center]}>
            <Text style={styles.txt_text}>18.00 - 21.00 Malam</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_hari: {
    backgroundColor: '#fff',
    width: 95,
    height: 44,
    elevation: 4,
    borderRadius: 4,
  },
  btn_hariActive: {
    backgroundColor: '#FDCB5A',
    width: 95,
    height: 44,
    elevation: 4,
    borderRadius: 4,
  },
  txt_text: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
  txt_textActive: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
  btn_jam: {
    backgroundColor: '#fff',
    width: 128,
    height: 34,
    elevation: 4,
    borderRadius: 3,
  },
  btn_jamActive: {
    backgroundColor: '#FDCB5A',
    width: 128,
    height: 34,
    elevation: 4,
    borderRadius: 2,
  },
})

export default ScrollView_Kunjungan