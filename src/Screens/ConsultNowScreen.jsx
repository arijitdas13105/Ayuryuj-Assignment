import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {dummyDoctorData} from '../utils/doctorData';
import { useNavigation } from '@react-navigation/native';
const ConsultNowScreen = () => {
   const [symptompSelected, setSymptompSelected] = React.useState([]);
   const navigation=useNavigation();
  const handleSymptoms = (item) => {
    console.log('Item clicked:', item);
    setSymptompSelected([...symptompSelected, item]);
   };
 const handleChooseDoctors = () => {
    navigation.navigate('MyOrderScreen', {symptoms: symptompSelected});
  };
  return (
    <View style={styles.container}>
      {/* top upper symptoms */}
      <View style={styles.topUpperHolder}>
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text>Symptoms</Text>
        <FontAwesome name="user-circle" size={30} color="black" />
      </View>
      {/* searchbar */}
      <Text style={{fontSize: 25, fontWeight: 'semibold', color: 'black'}}>
        What is your concern
      </Text>
      {/* select issue */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={25} color="black" />
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Seach for symptoms e.g. fever"
        />
      </View>
      {/* choose doctor button */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          color: 'red',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>
          {' '}
          Most Selected Issues
        </Text>
        <View
          style={{width: '100%', height: 1, backgroundColor: 'blue'}}></View>
      </View>
      <ScrollView>
        <View style={styles.gridContainer}>
          {dummyDoctorData.map((item, index) => {
            return (
              <TouchableOpacity
                 onPress={() => handleSymptoms(item)}
                key={index}
                style={styles.gridItems}>
                <Image
                  style={{width: 50, height: 50, borderRadius: 10}}
                  source={{uri: item.image}}
                />
                <Text style={styles.blackText}> {item.symptom} </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonDoctor} onPress={() => handleChooseDoctors() } >
        <Text style={styles.buttonText}>Choose Doctors</Text>
      </TouchableOpacity>
      ;
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    marginTop: 30,
    padding: 10,
  },
  topUpperHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // padding:20,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1, // Allows TextInput to take up remaining space
    fontSize: 16, // Font size for the placeholder and text
    color: '#333', // Text color
  },
  gridContainer: {
    padding: 10,
    // grid
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,

    justifyContent: 'center',
  },
  gridItems: {
    width: '45%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    // justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    borderWidth:1
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonDoctor: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    color: 'red',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ConsultNowScreen;
