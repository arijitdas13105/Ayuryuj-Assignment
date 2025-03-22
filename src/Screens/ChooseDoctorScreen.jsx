import {View, Text, StyleSheet, TextInput, ScrollView,Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
 const ChooseDoctorScreen = ({route}) => {
  const navigation = useNavigation();
  const {symptoms} = route.params;
  console.log("symptoms",symptoms);
  const allDoctors=symptoms.flatMap((symptom) => symptom.doctors);
  const renderDoctor=({item})=>{
    <View style={styles.doctorHolder}>
    {/* upper part */}
    <View style={styles.upperPart}>
       {/* image and experence */}
       <View style ={styles.imgEXP} >
         <View style={styles.imgHolder}>
           <Image style={styles.img} source={{uri:'https://thumbs.dreamstime.com/b/young-smart-brunette-female-doctor-29537034.jpg'}} />
         </View>
         <View>
            <Text style={styles.expText}>3 years exp</Text>
         </View>
       </View>
       {/* details */}
       <View style={styles.detailsHolder} >
         {/* hospital name */}
         <View style={styles.hospitalHolder}>
           <Ionicons name="medkit" size={25} color="black" />
           <Text style={styles.hospitalName}>Apollo Hospital</Text>
         </View>
         <View style={styles.doctorDetails} >
           <Text style={styles.doctorName} >Dr. Arpita</Text>
           <Text style={styles.degree}>MBBS</Text>
           <Text style={styles.type}>Physician</Text>
           <View style={styles.languageHolder}>
                 <Ionicons name="chatbubbles" size={30} color="blue" />
                 <Text> English, Hindi</Text>
              </View>
                <Text style={styles.fees} >₹ 349</Text>
          </View>

         {/* speciality */}
         <View></View>
       </View>
    </View>
   
    {/* lower part */}

    <View style={styles.lowerPart} >
    <View style={styles.knowMore}>
    <FontAwesome name="play-circle-o" size={25} color="black" />
    <Text style={styles.knowMoreText} >Know More</Text>
    </View>
     
       <Text style={styles.consultNow} >Consult Now</Text>
    </View>
</View>
  }
  return (
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.topUpperHolder}>
        <Ionicons name="arrow-back" size={30} color="black" onPress={() => navigation.navigate('ConsultNowScreen')} />
        <Text style={{fontSize:20,fontWeight:'bold'}} >Choose your Doctor</Text>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={25} color="black" />
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Seach for hospitals"
        />
      </View>
{/* offer section */}
      <View style={styles.offerHolder}>
      <View style={styles.offerBox}>
        <FontAwesome name="money" size={25} color="black" />
        <View style={styles.offerDetails}>
          <Text  style={styles.offerDetailsText} >Upto Rs 250</Text>
          <Text  style={styles.offerDetailsTextSub} >Cashback on MobiKwik wallet</Text>
        </View>
      </View>
      <View style={styles.offerBox}>
      <FontAwesome name="money" size={25} color="black" />
        <View style={styles.offerDetails}>
          <Text style={styles.offerDetailsText} >Upto Rs 250</Text>
          <Text style={styles.offerDetailsTextSub} >Cashback on MobiKwik wallet</Text>
        </View>
      </View>
      </View>

      <Text style={{fontSize:20,fontWeight:'bold'}} >Showing earliest available Doctors</Text>

      
      {/* doctor list */}
      <ScrollView >
        {
          allDoctors.map((doctor,index)=>{
            return(
              <>
              <View style={styles.doctorHolder}>
         {/* upper part */}
         <View style={styles.upperPart}>
            {/* image and experence */}
            <View style ={styles.imgEXP} >
              <View style={styles.imgHolder}>
                <Image style={styles.img} 
                // source={{uri:doctor.image}} 
                source={{uri:'https://thumbs.dreamstime.com/b/young-smart-brunette-female-doctor-29537034.jpg'}} 

                />
              </View>
              <View>
                 <Text style={styles.expText}>{doctor.experience} years exp</Text>
              </View>
            </View>
            {/* details */}
            <View style={styles.detailsHolder} >
              {/* hospital name */}
              <View style={styles.hospitalHolder}>
                <Ionicons  name="medkit" size={25} color="black" />
                <Text style={styles.hospitalName}>{doctor.hospitalName}</Text>
              </View>
              <View style={styles.doctorDetails} >
                <Text style={styles.doctorName} >{doctor.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center',gap:10}} > 
                     
                {
                  doctor.degrees.map((deg,index)=>{
                    return(
                       <Text style={styles.degree}>{deg}</Text>
                       
                    )
                  })
                }

                      </View>
              
                {/* <Text style={styles.degree}>MBBS</Text> */}
                <Text style={styles.type}>{doctor.type}</Text>
                <View style={styles.languageHolder}>
                      <Ionicons name="chatbubbles" size={20} color="#055D6E" />
                      {/* <Text> English, Hindi</Text> */}
                      {
                  doctor.languages.map((lang,index)=>{
                    return(
                      <Text style={styles.degree}>{lang}</Text>
                    )
                  })
                }
                   </View>
                     <Text style={styles.fees} >₹ {doctor.consultFees}</Text>
               </View>

              {/* speciality */}
              <View></View>
            </View>
         </View>
        
         {/* lower part */}

         <View style={styles.lowerPart} >
         <View style={styles.knowMore}>
         <FontAwesome name="play-circle-o" size={25} color="black" />
         <Text style={styles.knowMoreText} >Know More</Text>
         </View>
          
            <Text style={styles.consultNow} >Consult Now</Text>
         </View>
    </View>
              </>
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
    gap: 20,
    marginTop: 30,
  
    // borderWidth:1,
    },
  topUpperHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
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
    flex: 1,  
    fontSize: 16,  
    color: '#333', 
  },
  offerHolder: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',  
   },
  offerBox: {
    flexDirection: 'row',
    borderWidth: 1,
    gap:8,
    maxWidth: '48%', 
    
    padding: 10,  
    borderRadius:10

  },
  offerDetailsText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  offerDetailsTextSub: {
    fontSize: 13,
   },

   doctorHolder: {
       
      padding:10,
      gap:10,
      borderRadius:10,
      backgroundColor:'white'
    },
    upperPart:{
      flexDirection:'row',
       
 
    },
    imgEXP:{
       alignItems:'center',
      gap:10,
      width:'40%'

    },
    imgHolder:{

    },
    img:{
      height:150,
      width:150
    },
    expText:{
      paddingHorizontal:15,
      paddingVertical:7,
       backgroundColor:'#0B90A9',
      color:'white',
      borderRadius:10

    },
    detailsHolder:{
       width:'60%',
      paddingHorizontal:10,
      gap:10
     },
    hospitalHolder:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
       
     },
     hospitalName:{
      fontSize:18,
      fontWeight:'bold',
      width:'80%'
     },
     lowerPart:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      borderTopColor:'grey',
      borderTopWidth:1,
      paddingVertical:15
       },
     consultNow:{
      paddingHorizontal:20,
      paddingVertical:10,
      borderWidth:1,
      backgroundColor:'#ED4C17',
      color:'white',
      borderRadius:10,
      fontSize:20
     },
     doctorDetails:{
      gap:5,
      paddingHorizontal:10

     },
     doctorName:{
      fontSize:20,
      fontWeight:'bold'
     },
     degree:{
      flexDirection:'row',
      fontSize:15,
      fontWeight:500,
      
     },
     type:{
      fontSize:15,
      fontWeight:500
     },
     languageHolder:{
      flexDirection:'row',
      alignItems:'center',
      gap:10
     },
     fees:{
      fontSize:20,
      fontWeight:'bold'
     },
     knowMore:{
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      },
      knowMoreText:{
        fontSize:18,
        color:'blue'
       }
     
    
});

export default ChooseDoctorScreen;
