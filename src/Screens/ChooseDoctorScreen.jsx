import {View, Text, StyleSheet, TextInput, ScrollView, Image, Dimensions} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

 const { width, height } = Dimensions.get('window');

 const scale = width / 400;  
const responsiveSize = (size) => size * scale;

const ChooseDoctorScreen = ({route}) => {
  const navigation = useNavigation();
  const {symptoms} = route.params;
  console.log("symptoms", symptoms);
  const allDoctors = symptoms.flatMap((symptom) => symptom.doctors);

  return (
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.topUpperHolder}>
        <Ionicons 
          name="arrow-back" 
          size={responsiveSize(30)} 
          color="black" 
          onPress={() => navigation.navigate('ConsultNowScreen')} 
        />
        <Text style={styles.headerText}>Choose your Doctor</Text>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={responsiveSize(25)} color="black" />
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Search for hospitals"
        />
      </View>

      {/* offer section */}
      <View style={styles.offerHolder}>
        <View style={styles.offerBox}>
          <FontAwesome name="money" size={responsiveSize(25)} color="black" />
          <View style={styles.offerDetails}>
            <Text style={styles.offerDetailsText}>Upto Rs 250</Text>
            <Text style={styles.offerDetailsTextSub}>Cashback on MobiKwik wallet</Text>
          </View>
        </View>
        <View style={styles.offerBox}>
          <FontAwesome name="money" size={responsiveSize(25)} color="black" />
          <View style={styles.offerDetails}>
            <Text style={styles.offerDetailsText}>Upto Rs 250</Text>
            <Text style={styles.offerDetailsTextSub}>Cashback on MobiKwik wallet</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Showing earliest available Doctors</Text>

      {/* doctor list */}
      <ScrollView>
        {
          allDoctors.map((doctor, index) => {
            return (
              <View key={index} style={styles.doctorHolder}>
                {/* upper part */}
                <View style={styles.upperPart}>
                  {/* image and experience */}
                  <View style={styles.imgEXP}>
                    <View style={styles.imgHolder}>
                      <Image 
                        style={styles.img} 
                        source={{uri: 'https://thumbs.dreamstime.com/b/young-smart-brunette-female-doctor-29537034.jpg'}} 
                      />
                    </View>
                    <View>
                      <Text style={styles.expText}>{doctor.experience} years exp</Text>
                    </View>
                  </View>
                  {/* details */}
                  <View style={styles.detailsHolder}>
                    {/* hospital name */}
                    <View style={styles.hospitalHolder}>
                      <Ionicons name="medkit" size={responsiveSize(25)} color="black" />
                      <Text style={styles.hospitalName}>{doctor.hospitalName}</Text>
                    </View>
                    <View style={styles.doctorDetails}>
                      <Text style={styles.doctorName}>{doctor.name}</Text>
                      <View style={styles.degreesContainer}>
                        {
                          doctor.degrees.map((deg, idx) => {
                            return (
                              <Text key={idx} style={styles.degree}>{deg}</Text>
                            )
                          })
                        }
                      </View>
                      <Text style={styles.type}>{doctor.type}</Text>
                      <View style={styles.languageHolder}>
                        <Ionicons name="chatbubbles" size={responsiveSize(20)} color="#055D6E" />
                        {
                          doctor.languages.map((lang, idx) => {
                            return (
                              <Text key={idx} style={styles.degree}>{lang}</Text>
                            )
                          })
                        }
                      </View>
                      <Text style={styles.fees}>₹ {doctor.consultFees}</Text>
                    </View>
                  </View>
                </View>
              
                {/* lower part */}
                <View style={styles.lowerPart}>
                  <View style={styles.knowMore}>
                    <FontAwesome name="play-circle-o" size={responsiveSize(25)} color="black" />
                    <Text style={styles.knowMoreText}>Know More</Text>
                  </View>
                  <Text style={styles.consultNow}>Consult Now</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: responsiveSize(20),
    marginTop: height * 0.04,
    paddingHorizontal: responsiveSize(10),
  },
  topUpperHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(20),
  },
  headerText: {
    fontSize: responsiveSize(20),
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: responsiveSize(20),
    fontWeight: 'bold',
    marginVertical: responsiveSize(5),
  },
  searchBar: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveSize(15),
    paddingHorizontal: responsiveSize(10),
    paddingVertical: responsiveSize(5),
  },
  input: {
    flex: 1,  
    fontSize: responsiveSize(16),  
    color: '#333',
    paddingVertical: responsiveSize(8),
  },
  offerHolder: {
    flexDirection: 'row',
    gap: responsiveSize(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  offerBox: {
    flexDirection: 'row',
    borderWidth: 1,
    gap: responsiveSize(8),
    maxWidth: '48%',
    padding: responsiveSize(10),
    borderRadius: responsiveSize(10),
    alignItems: 'center',
  },
  offerDetails: {
    flex: 1,
  },
  offerDetailsText: {
    fontSize: responsiveSize(15),
    fontWeight: 'bold',
  },
  offerDetailsTextSub: {
    fontSize: responsiveSize(13),
  },
  doctorHolder: {
    padding: responsiveSize(10),
    gap: responsiveSize(10),
    borderRadius: responsiveSize(10),
    backgroundColor: 'white',
    marginBottom: responsiveSize(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  upperPart: {
    flexDirection: 'row',
  },
  imgEXP: {
    alignItems: 'center',
    gap: responsiveSize(10),
    width: '40%',
  },
  imgHolder: {
    
  },
  img: {
    height: width * 0.35,
    width: width * 0.35,
    borderRadius: responsiveSize(10),
  },
  expText: {
    paddingHorizontal: responsiveSize(15),
    paddingVertical: responsiveSize(7),
    backgroundColor: '#0B90A9',
    color: 'white',
    borderRadius: responsiveSize(10),
    fontSize: responsiveSize(14),
  },
  detailsHolder: {
    width: '60%',
    paddingHorizontal: responsiveSize(10),
    gap: responsiveSize(10),
  },
  hospitalHolder: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: responsiveSize(10),
  },
  hospitalName: {
    fontSize: responsiveSize(16),
    fontWeight: 'bold',
    flexShrink: 1,
  },
  degreesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(10),
    flexWrap: 'wrap',
  },
  lowerPart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    paddingVertical: responsiveSize(15),
    marginTop: responsiveSize(10),
  },
  consultNow: {
    paddingHorizontal: responsiveSize(20),
    paddingVertical: responsiveSize(10),
    borderWidth: 1,
    backgroundColor: '#ED4C17',
    color: 'white',
    borderRadius: responsiveSize(10),
    fontSize: responsiveSize(18),
    fontWeight: 'bold',
  },
  doctorDetails: {
    gap: responsiveSize(5),
    paddingHorizontal: responsiveSize(10),
  },
  doctorName: {
    fontSize: responsiveSize(18),
    fontWeight: 'bold',
  },
  degree: {
    fontSize: responsiveSize(14),
    fontWeight: '500',
  },
  type: {
    fontSize: responsiveSize(14),
    fontWeight: '500',
  },
  languageHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(10),
    flexWrap: 'wrap',
  },
  fees: {
    fontSize: responsiveSize(18),
    fontWeight: 'bold',
    marginTop: responsiveSize(5),
  },
  knowMore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(10),
  },
  knowMoreText: {
    fontSize: responsiveSize(16),
    color: 'blue',
  }
});

export default ChooseDoctorScreen;

 