import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const ScrollView_Kota = () => {
  return (
    <View>
      <ScrollView style={{ maxHeight: 30, marginTop: 10, marginBottom: 16 }} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <Text style={styles.btn_active}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 5 }}>
            <Text style={styles.button}>Batam</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 5 }}>
            <Text style={styles.button}>Jakarta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 5, marginRight: 13 }}>
            <Text style={styles.button}>Bandung</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  btn_active: {
    backgroundColor: '#FDCB5A',
    color: '#1A3150',
    width: 100,
    height: 30,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    textAlign: 'center',
    padding: 6,
    borderRadius: 4,
  },

  button: {
    backgroundColor: '#fff',
    borderColor: '#FDCB5A',
    color: '#1A3150',
    width: 100,
    height: 30,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    textAlign: 'center',
    padding: 6,
    borderWidth: 1,
    borderRadius: 4,
  },
})

export default ScrollView_Kota