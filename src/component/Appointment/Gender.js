import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { RadioButton } from 'react-native-paper';

const Gender = () => {
  const [checked, setChecked] = useState('male')

  return (
    <View>
      <Text style={[styles.label, { marginTop: 8 }]}>Gender</Text>
      <View style={{ flexDirection: 'row' }}>
        {/* Male Section */}
        <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
          <RadioButton
            value='male'
            status={checked === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('male')}
            color={'#FDCB5A'}
          />
          <Text style={styles.txt_gender}>Male</Text>
        </View>

        {/* Female Section */}
        <View style={{ flexDirection: 'row', marginLeft: 30, alignItems: 'center' }}>
          <RadioButton
            value='female'
            status={checked === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('female')}
            color={'#FDCB5A'}
          />
          <Text style={styles.txt_gender}>Female</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 16,
    marginBottom: 1,
  },

  txt_gender: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
})

export default Gender