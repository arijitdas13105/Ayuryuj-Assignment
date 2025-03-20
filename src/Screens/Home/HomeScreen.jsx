import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreenGridData, TestPackages} from './Data';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation=useNavigation();
  
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* top section */}
        <View style={styles.menuTopHolder}>
          <View style={[styles.rowDesign, styles.menu_location]}>
            {/* <Entypo name="menu" size={30} color="black" /> */}
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Entypo name="menu" size={30} color="black" />
            </TouchableOpacity>

            <View>
              <Text>Your Location</Text>
              <Text>Delhi</Text>
            </View>
          </View>
          <View style={[styles.rowDesign, styles.menu_location]}>
            <Entypo name="wallet" size={30} color="black" />
            <Ionicons name="notifications" size={30} color="black" />
          </View>
        </View>
        {/* grid sections */}
        <View style={styles.gridContainer}>
          {HomeScreenGridData.map((item, index) => {
            return (
              <View key={index} style={styles.gridItems}>
                <Text style={styles.gridText}> {item.title} </Text>
                <Image
                  style={{width: 80, height: 90, borderRadius: 10}}
                  source={{uri: item.imageLink}}
                />
                <Text style={styles.gridExtraText}> {item.extra} </Text>
              </View>
            );
          })}
        </View>

        {/* skin contest section */}
        <View style={[styles.skinContestContainer]}>
          <View style={{borderColor: 'black', gap: 20}}>
            <View style={styles.headerContainer}>
              <Text style={styles.skinContestTextHeader}> Skin Concerns? </Text>
            </View>
            <View>
              <View style={styles.rowDesign}>
                <Text style={styles.blackText}>Avail a</Text>
                <Text style={styles.blueText}> FREE </Text>
              </View>

              <Text style={styles.blueText}>Cosmetologist</Text>
              <Text style={styles.blackText}>Consult today!</Text>
            </View>
          </View>
          <View>
            <Image
              style={{width: 200, height: 200}}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/027/735/608/original/a-black-female-doctor-wearing-a-white-coat-free-png.png',
              }}
            />
          </View>
        </View>
        {/* text of FAQ */}
        <View style={styles.FAQContainer}>
          <Text style={[styles.blackText, {fontSize: 20}]}>
            Frequently Booked Health Checks
          </Text>
          <Text style={styles.faqViewALL}>View All</Text>
        </View>
        {/* ayshman vital check */}
        <View style={[styles.gridPackageContainer]}>
          {TestPackages.map((item, index) => {
            return (
              <View key={index} style={styles.gridPackageItems}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}> {item.testCount}+ Tests </Text>
                <Text style={[styles.blackText, {fontSize: 17}]}>
                  {' '}
                  {item.title}{' '}
                </Text>
                <Text  style={[styles.blackText, {fontSize: 17}]}> {item.type} </Text>
                <View style={styles.healthCheckFees}>
                  <Text style={styles.feesTextColor}> {item.price} </Text>
                  <Text style={[styles.feesTextColor,{textDecorationLine:'line-through'}]}> {item.actualPrice} </Text>
                  <Text style={styles.feesTextColor}>
                    {' '}
                    {item.discount}% OFF{' '}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* ANOTHER SECTIONS */}

        <View style={styles.downBannerContainer} >
          <Image style={styles.downBannerImage} 
             // source={{uri:'https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/04/health-tools-desktop.webp'}}  />
            source={{uri:'https://cdn.dribbble.com/users/4613797/screenshots/16277983/86_4x.jpg'}}  />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    marginTop:25
  },
  rowDesign: {
    flexDirection: 'row',
  },
  menuTopHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu_location: {
    gap: 10,
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
    width: '30%',
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    // justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
  },
  gridPackageContainer: {
    padding: 10,
    // grid
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
     justifyContent:'center',
    alignItems:'center'
  },
  gridPackageItems: {
    width: '45%',
    // height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
     paddingVertical: 25,
     paddingHorizontal:5,
    alignItems: 'flex-start',
   },
  gridText: {
    color: 'black',
    textAlign: 'center',
    color: 'black',
  },
  gridExtraText: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
  },
  skinContestContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    height: 200,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignSelf: 'flex-start', // ✅ Shrinks to content width
    backgroundColor: 'white',
    paddingHorizontal: 20, // ✅ Adjusts padding
    paddingVertical: 4, // ✅ Gives some height
    borderRadius: 25, // ✅ Rounds corners
    borderWidth: 1,
    borderColor: 'black',
  },
  skinContestTextHeader: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center', // ✅ Centers text inside the View
  },
  blueText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  FAQContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
  },
  faqViewALL: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
  },
  feesTextColor: {
    color: 'white',
    fontSize: 15,
  },
  healthCheckFees: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingHorizontal: 2,
  },
  downBannerContainer:{
    padding: 10,
    // borderWidth:2,
    height:300

  },
  downBannerImage:{
    objectFit:'cover',
    
    width:'100%',
    // height:'100%',
     height:'100%',
    //  aspectRatio:16/15
  }
});

export default HomeScreen;
