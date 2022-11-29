import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import BackButton from '../BackButton'
import KlinikCard from '../Home/KlinikCard'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MoreSearch = () => {
  return (
    <View style={styles.container}>
      <BackButton />

      <View style={{ justifyContent: 'center', marginTop: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
          <TextInput
            style={styles.input}
            placeholder='Cari klinik terdekat'
            placeholderTextColor='#CACACA'
          />
          <Icon
            style={{ marginTop: -14, marginLeft: -307 }}
            name='magnify'
            color='#CACACA'
            size={16}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        marginLeft={16}
      >
        <KlinikCard />
        <KlinikCard />
        <KlinikCard />
        <KlinikCard />
        <KlinikCard />
        <KlinikCard />
        <KlinikCard />
        <KlinikCard />
        <KlinikCard />
        <KlinikCard />
      </ScrollView>
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

  head: {
    width: '100%',
    height: 90,
    backgroundColor: '#1A3150',
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  maps: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
  },

  txt_maps: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 19,
  },

  input: {
    backgroundColor: '#F1F1F1',
    color: '#000',
    width: 328,
    height: 32,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    padding: 8,
    paddingHorizontal: 40,
    marginBottom: 16,
    borderRadius: 3,
  },
})

export default MoreSearch