import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'

import ImageSwiper from '../component/Home/ImageSwiper'
import ScrollView_Kota from '../component/Home/ScrollView_Kota'
import KlinikCard from '../component/Home/KlinikCard'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Background from '../assets/ellipse.png'
import Logo from '../assets/Logo/icon.png'
import Vet from '../assets/Logo/vet_mini.png'

import Cat from '../assets/Animal/cat.png'
import Dog from '../assets/Animal/dog.png'
import Hamster from '../assets/Animal/hamster.png'
import Rabbit from '../assets/Animal/rabbit.png'

const { width } = Dimensions.get('window')
const height = width * 0.3

const Dashboard = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        source={Background}
        style={styles.img_bg}
      />

      {/* Head Section */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -110, marginLeft: 24 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={Logo}
            style={styles.img_logo}
          />
          <Image
            source={Vet}
            style={styles.img_vet}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: -5, marginRight: 24 }}>
          <TouchableOpacity>
            <Icon
              style={{ marginRight: 13 }}
              name={'email-outline'}
              color={'#fff'} size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name={'alpha-a-circle'}
              color={'#FDCB5A'} size={24}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body Section */}
      <ScrollView
        style={{ marginTop: 25 }}
        showsVerticalScrollIndicator
      >
        {/* Swiper Section */}
        <ImageSwiper />

        {/* Category Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 60 }}>
          <TouchableOpacity>
            <Image
              source={Cat}
              style={[styles.img_circle]}
            />
            <Text style={styles.txt_animal}>Kucing</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={Dog}
              style={[styles.img_circle]}
            />
            <Text style={styles.txt_animal}>Anjing</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={Hamster}
              style={[styles.img_circle]}
            />
            <Text style={styles.txt_animal}>Hamster</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={Rabbit}
              style={[styles.img_circle]}
            />
            <Text style={styles.txt_animal}>Kelinci</Text>
          </TouchableOpacity>
        </View>

        {/* More Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 35 }}>
          <View>
            <Text style={styles.txt_title}>Konsultasi Klinik</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('MoreSearch')}>
              <Text style={styles.txt_more}> Lihat Lainnya {'>>'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView_Kota />

        {/* Klinik Card Section */}
        <View style={{ flex: 1, marginLeft: 16 }}>
          <KlinikCard />
          <KlinikCard />
          <KlinikCard />
          <KlinikCard />
          <KlinikCard />
          <KlinikCard />
        </View>
      </ScrollView>
    </View >
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

  img_bg: {
    width: '100%',
    height: '20%',
  },

  img_logo: {
    width: 32,
    height: 13,
  },

  img_vet: {
    width: 25,
    height: 13,
    marginLeft: 8,
  },

  img_circle: {
    width: 48,
    height: 48,
    marginTop: 40
  },

  txt_animal: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    alignSelf: 'center',
    marginTop: 4,
  },

  txt_title: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  txt_more: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 2,
  },

  button: {
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
})

export default Dashboard