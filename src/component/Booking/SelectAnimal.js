import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Cat from '../../assets/Animal/cats.png'
import Dog from '../../assets/Animal/dogs.png'
import Hamster from '../../assets/Animal/hamsters.png'
import Rabbit from '../../assets/Animal/rabbits.png'

const SelectAnimal = () => {
  return (
    <View>
      {/* Choose Animal Section */}
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <TouchableOpacity style={[styles.btn_active, { marginLeft: 16 }, styles.center]}>
          <Image
            source={Dog}
            style={styles.img_animal}
          />
          <Text style={styles.txt_animal}>Anjing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn_animal, { marginLeft: 8 }, styles.center]}>
          <Image
            source={Hamster}
            style={styles.img_animal}
          />
          <Text style={styles.txt_animal}>Hamster</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn_animal, { marginLeft: 8 }, styles.center]}>
          <Image
            source={Rabbit}
            style={styles.img_animal}
          />
          <Text style={styles.txt_animal}>Kelinci</Text>
        </TouchableOpacity>
      </View>

      {/* Choose Animal Section 2 */}
      <View style={{ flexDirection: 'row', marginTop: 13 }}>
        <TouchableOpacity style={[styles.btn_animal, { marginLeft: 16 }, styles.center]}>
          <Image
            source={Cat}
            style={styles.img_animal}
          />
          <Text style={styles.txt_animal}>Kucing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn_animal, { marginLeft: 8 }, styles.center]}>
          <Image
            source={Cat}
            style={styles.img_animal}
          />
          <Text style={styles.txt_animal}>Kucing</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn_animal: {
    flexDirection: 'row',
    backgroundColor: '#E0E9F5',
    width: 104,
    height: 36,
    borderRadius: 4,
  },

  btn_active: {
    flexDirection: 'row',
    backgroundColor: '#C2CDDB',
    width: 104,
    height: 36,
    borderRadius: 4,
  },

  img_animal: {
    width: 28,
    height: 28,
  },

  txt_animal: {
    color: '#1A3150',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 8,
  },
})

export default SelectAnimal