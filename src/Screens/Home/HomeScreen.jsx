import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreenGridData, TestPackages} from './Data';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

 const { width, height } = Dimensions.get('window');

 const scale = width / 400;  
const responsiveSize = (size) => size * scale;

const HomeScreen = () => {
  const navigation = useNavigation();
  const colors = [
    '#d1dced',
    '#e9f0b9',
    '#BBDEFB',
    '#edce98',
    '#dcc8e8',
    '#B2DFDB',
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* top section */}
        <View style={styles.menuTopHolder}>
          <View style={[styles.rowDesign, styles.menu_location]}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Entypo name="menu" size={responsiveSize(30)} color="black" />
            </TouchableOpacity>

            <View>
              <Text style={styles.normalText}>Your Location</Text>
              <Text style={styles.normalText}>Delhi</Text>
            </View>
          </View>
          <View style={[styles.rowDesign, styles.menu_location]}>
            <Entypo name="wallet" size={responsiveSize(30)} color="black" />
            <Ionicons name="notifications" size={responsiveSize(30)} color="black" />
          </View>
        </View>
        {/* grid sections */}
        <View style={styles.gridContainer}>
          {HomeScreenGridData.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.gridItems,
                  {backgroundColor: colors[index % colors.length]},
                ]}>
                <Text style={styles.gridText}> {item.title} </Text>
                <Image
                  style={styles.gridImage}
                  source={{uri: item.imageLink}}
                />

                {
                  item.extra && (
                    <View style={styles.gridExtraTextContainer}>
                  <LinearGradient
                    colors={['#F38FD4', '#F8A98A']}  
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.gridExtraText}>
                  
                      <Text style={styles.gridExtraTextStyle}>{item.extra}</Text>
                 
                    
                  </LinearGradient>
                </View>
                  )
                }
              </View>
            );
          })}
        </View>

        {/* skin contest section */}
        <View style={[styles.skinContestContainer]}>
          <View style={{borderColor: 'black', gap: responsiveSize(20)}}>
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
              style={styles.doctorImage}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/027/735/608/original/a-black-female-doctor-wearing-a-white-coat-free-png.png',
              }}
            />
          </View>
        </View>
        {/* text of FAQ */}
        <View style={styles.FAQContainer}>
          <Text style={[styles.blackText, {fontSize: responsiveSize(20)}]}>
            Frequently Booked Health Checks
          </Text>
          <Text style={styles.faqViewALL}>View All</Text>
        </View>
        {/* ayshman vital check */}
        <View style={[styles.gridPackageContainer]}>
          {TestPackages.map((item, index) => {
            return (
              <View key={index} style={styles.gridPackageItems}>
                <Text style={{fontSize: responsiveSize(15), fontWeight: 'bold', color: '#17207D'}}>
                  {' '}
                  {item.testCount}+ Tests{' '}
                </Text>
                <Text style={[styles.blackText, {fontSize: responsiveSize(17)}]}>
                  {' '}
                  {item.title}{' '}
                </Text>
                <Text style={[styles.blackText, {fontSize: responsiveSize(17)}]}>
                  {' '}
                  {item.type}{' '}
                </Text>
                <View style={styles.healthCheckFees}>
                  <Text style={styles.feesTextColor}> {item.price} </Text>
                  <Text
                    style={[
                      styles.feesTextColor,
                      {textDecorationLine: 'line-through'},
                    ]}>
                    {' '}
                    {item.actualPrice}{' '}
                  </Text>
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

        <View style={styles.downBannerContainer}>
          <Image
            style={styles.downBannerImage}
            source={{
              uri: 'https://cdn.dribbble.com/users/4613797/screenshots/16277983/86_4x.jpg',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: responsiveSize(2),
    marginTop: height * 0.03,  
  },
  rowDesign: {
    flexDirection: 'row',
  },
  menuTopHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu_location: {
    gap: responsiveSize(10),
  },
  normalText: {
    fontSize: responsiveSize(14),
  },
  gridPackageContainer: {
    padding: responsiveSize(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsiveSize(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridPackageItems: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: responsiveSize(10),
    paddingVertical: height * 0.03,
    paddingHorizontal: responsiveSize(5),
    alignItems: 'flex-start',
    gap: responsiveSize(3)
  },
  gridContainer: {
    padding: responsiveSize(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsiveSize(15),
    justifyContent: 'center',
  },
  gridItems: {
    width: '30%',
    height: width * 0.38,  
    backgroundColor: 'white',
    borderRadius: responsiveSize(10),
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
    paddingVertical: responsiveSize(10),
  },
  gridImage: {
    width: '80%',
    height: '60%',
    borderRadius: responsiveSize(10),
    alignSelf: 'center',
  },
  gridText: {
    textAlign: 'center',
    color: 'black',
    fontSize: responsiveSize(15),
  },
  gridExtraTextContainer: {
    position: 'absolute',
    bottom: responsiveSize(20),
    borderRadius: responsiveSize(5),
    overflow: 'hidden',
  },
  gridExtraText: {
    paddingHorizontal: responsiveSize(8),
    paddingVertical: responsiveSize(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridExtraTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: responsiveSize(12),
  },
  skinContestContainer: {
    marginTop: responsiveSize(20),
    paddingHorizontal: responsiveSize(20),
    height: height * 0.25,  
    borderRadius: responsiveSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: responsiveSize(20),
    paddingVertical: responsiveSize(4),
    borderRadius: responsiveSize(25),
    borderWidth: 1,
    borderColor: 'black',
  },
  skinContestTextHeader: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: responsiveSize(14),
  },
  blueText: {
    color: '#05778B',
    fontWeight: 'bold',
    fontSize: responsiveSize(25),
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveSize(22),
  },
  FAQContainer: {
    padding: responsiveSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: responsiveSize(10),
    alignItems: 'center',
  },
  faqViewALL: {
    paddingHorizontal: responsiveSize(8),
    paddingVertical: responsiveSize(5),
    borderRadius: responsiveSize(10),
    fontWeight: 'bold',
    backgroundColor: '#05778B',
    color: 'white',
    textAlign: 'center',
    fontSize: responsiveSize(14),
  },
  feesTextColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveSize(15),
  },
  healthCheckFees: {
    flexDirection: 'row',
    backgroundColor: '#276880',
    borderRadius: responsiveSize(8),
    paddingHorizontal: responsiveSize(2),
    gap: responsiveSize(2),
  },
  downBannerContainer: {
    padding: responsiveSize(10),
    height: height * 0.3, 
  },
  downBannerImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  doctorImage: {
    width: width * 0.45,
    height: width * 0.45,
    resizeMode: 'contain',
  }
});

export default HomeScreen;
 