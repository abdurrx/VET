import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Images from '../../assets/Photos/Ma.jpeg'

const ProfileCard = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.card} >
      {/* First Row */}
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={Images}
          style={styles.photos}
        />
        <View>
          {/* Title and Icon Section */}
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txt_name}>Abdur Rahman</Text>
            <TouchableOpacity
              style={{ marginTop: 10.5, marginLeft: 95 }}
              onPress={() => navigation.navigate('Edit')}
            >
              <Icon
                name='pencil'
                color='#000'
                size={20}
              />
            </TouchableOpacity>
          </View>

          {/* Phone Section */}
          <Text style={styles.txt_number}>+6285805755360</Text>
        </View>
      </View>

      {/* Second Row */}
      <View style={{ flexDirection: 'row', marginTop: 26 }}>
        {/* Age Section */}
        <View style={{ marginLeft: 24, alignItems: 'center' }}>
          <Icon
            name='calendar-range'
            color='#1A3150'
            size={20}
          />
          <Text style={styles.txt_label}>21 years</Text>
        </View>

        {/* Pet Section */}
        <View style={{ marginLeft: 80, alignItems: 'center' }}>
          <Icon
            name='paw'
            color='#1A3150'
            size={20}
          />
          <Text style={styles.txt_label}>4 Pets</Text>
        </View>

        {/* Many Section */}
        <View style={{ marginLeft: 80, alignItems: 'center' }}>
          <Icon
            name='text-box-check'
            color='#1A3150'
            size={20}
          />
          <Text style={styles.txt_label}>3 Times</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: 328,
    height: 152,
    elevation: 4,
    marginTop: 24,
    marginLeft: 16,
  },

  photos: {
    width: 51,
    height: 51,
    borderRadius: 25,
    marginTop: 18,
    marginLeft: 24,
  },

  txt_name: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 24,
    marginLeft: 16,
  },

  txt_number: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 16,
  },
 
  txt_label: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default ProfileCard