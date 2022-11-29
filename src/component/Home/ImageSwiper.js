import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

import Swiper from 'react-native-swiper'

import Cat from '../../assets/Animal/realcat.jpg'
import Dog from '../../assets/Animal/realdog.jpg'
import Hamster from '../../assets/Animal/realhamster.jpg'
import Rabbit from '../../assets/Animal/realrabbit.jpg'

const { width } = Dimensions.get('window')
const height = width * 0.5

const ImageSwiper = () => {
  return (
    <View>
      <Swiper
        style={{ height: 140 }}
        dot={
          <View
            style={{
              backgroundColor: '#C2CDDB',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: -64,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#FDCB5A',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: -64,
            }}
          />
        }
        loop
        autoplay
      >
        <Image
          source={Cat}
          style={[styles.images]}
        />
        <Image
          source={Dog}
          style={[styles.images]}
        />
        <Image
          source={Hamster}
          style={[styles.images]}
        />
        <Image
          source={Rabbit}
          style={[styles.images]}
        />
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  images: {
    width,
    height,
    resizeMode: 'contain',
  },
})

export default ImageSwiper