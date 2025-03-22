import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {dummyDoctorData} from '../utils/doctorData';
import { useNavigation } from '@react-navigation/native';

 const { width, height } = Dimensions.get('window');

 const scale = width / 392; // 392 is base width for Google Pixel 7a (6.1 inch)

 const responsiveSize = (size) => {
  return Math.round(size * scale);
};

const ConsultNowScreen = () => {
   const [symptompSelected, setSymptompSelected] = React.useState([]);
   const navigation=useNavigation();

  const handleSymptoms = (item) => {
     const isSelected = symptompSelected.some((selected) => selected.symptom === item.symptom);
  
    if (isSelected) {
       setSymptompSelected((prev) => prev.filter((selected) => selected.symptom !== item.symptom));
    } else {
       setSymptompSelected((prev) => [...prev, item]);
    }
  };
  
  const handleChooseDoctors = () => {
    navigation.navigate('ChooseDoctorScreen', {symptoms: symptompSelected});
  };

  return (
    <View style={styles.container}>
      {/* top upper symptoms */}
      <View style={styles.topUpperHolder}>
        <Ionicons 
          name="arrow-back" 
          size={responsiveSize(30)} 
          color="black" 
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Text style={styles.headerText}>Symptoms</Text>
        <FontAwesome name="user-circle" size={responsiveSize(30)} color="black" />
      </View>
      {/* searchbar */}
      <Text style={styles.concernText}>
        What is your concern
      </Text>
      {/* select issue */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={responsiveSize(25)} color="black" />
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Seach for symptoms e.g. fever"
        />
      </View>
      {/* choose doctor button */}
      <View style={styles.issuesHeaderContainer}>
        <Text style={styles.issuesHeaderText}>
          {' '}
          Most Selected Issues
        </Text>
        <View style={styles.divider}></View>
      </View>
      <ScrollView>
        <View style={styles.gridContainer}>
          {dummyDoctorData.map((item, index) => {
            const isSelected = symptompSelected.some((selected) => selected.symptom === item.symptom);
            return (
              <TouchableOpacity
                onPress={() => handleSymptoms(item)}
                key={index}
                style={[styles.gridItems, {backgroundColor: isSelected ? 'blue' : 'white'}]}>
                <Image
                  style={styles.itemImage}
                  source={{uri: item.image}}
                />
                <Text style={styles.blackText}> {item.symptom} </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity 
        disabled={symptompSelected.length === 0}
        style={[styles.buttonDoctor, symptompSelected.length === 0 && styles.buttonDisabled]}  
        onPress={() => handleChooseDoctors()} >
        <Text style={styles.buttonText}>Choose Doctors</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: responsiveSize(20),
    marginTop: responsiveSize(30),
    padding: responsiveSize(10),
  },
  topUpperHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: responsiveSize(16),
    color: 'black',
  },
  concernText: {
    fontSize: responsiveSize(25), 
    fontWeight: 'semibold', 
    color: 'black'
  },
  searchBar: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveSize(15),
    paddingHorizontal: responsiveSize(10),
    height: responsiveSize(45),
  },
  input: {
    flex: 1,  
    fontSize: responsiveSize(16),  
    color: '#333',
    paddingVertical: responsiveSize(8),
  },
  issuesHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(10),
    color: 'red',
  },
  issuesHeaderText: {
    fontSize: responsiveSize(20), 
    fontWeight: 'bold', 
    color: 'blue'
  },
  divider: {
    width: '100%', 
    height: 1, 
    backgroundColor: 'blue'
  },
  
  gridContainer: {
    padding: responsiveSize(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsiveSize(15),
    justifyContent: 'center',
  },
  gridItems: {
    width: width * 0.40, // 45% of screen width instead of fixed percentage
    height: responsiveSize(50),
    backgroundColor: 'white',
    borderRadius: responsiveSize(10),
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: responsiveSize(5),
    
  },
  
  itemImage: {
    width: responsiveSize(50), 
    height: responsiveSize(50), 
    borderRadius: responsiveSize(10)
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveSize(14),
    flexShrink: 1,
  },
  buttonDoctor: {
    backgroundColor: 'blue',
    padding: responsiveSize(15),
    borderRadius: responsiveSize(10),
    color: 'red',
    alignItems: 'center',
    marginBottom: responsiveSize(10),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveSize(15),
  },
  buttonDisabled: {
    backgroundColor: 'gray', 
  },
});

export default ConsultNowScreen;

 