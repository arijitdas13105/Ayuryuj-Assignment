import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
 import {blue} from 'react-native-reanimated/lib/typescript/Colors';
import ConsultNowScreen from '../Screens/ConsultNowScreen';
import LabTestScreen from '../Screens/LabTestScreen';
import MedicinesScreen from '../Screens/MedicinesScreen';
import MyOrderScreen from '../Screens/MyOrderScreen';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
      
      >
      {/* Profile Section */}
      <View style={styles.profileSection}>
        {/* user family */}
        <View style={styles.familyHolderContainer}>
          <View style={styles.familyHolder}>
            <View style={styles.addFamilyHolder}>
            <View>
            <Entypo name="user" size={30} color="white" />
            </View>
             
              <Text style={styles.familyText}>Arpit </Text>
            </View>
            <View>
              <Entypo name="add-user" size={30} color="black" />
              <Text style={styles.familyText}>Husband</Text>
            </View>
            <View>
              <Entypo name="add-user" size={30} color="black" />
              <Text style={styles.familyText}>father</Text>
            </View>
            <View>
              <Entypo name="add-user" size={30} color="black" />
              <Text style={styles.familyText}>Mother</Text>
            </View>
          </View>
          <View style={styles.addFamily}>
            <Ionicons name="add-circle" size={30} color="black" />
            <Text style={styles.familyText}>Add Family</Text>
          </View>
        </View>
        {/* share app */}
        <View style={styles.shareAppHolder}>
          <Entypo name="share" size={30} color="black" />

          <View>
            <Text style={styles.blackText}>Share The App</Text>
            <Text>Recommnend to family and friends</Text>
          </View>
        </View>
        {/* services */}

        <Text style={styles.blackText}>MFINE CARE SERVICES</Text>

        <View>
          <DrawerItem
            label="Consult Now"
            icon={() => <Fontisto name="doctor" size={28} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
             labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Book Health Packages"
            icon={() => <AntDesign name="medicinebox" size={28} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Order Lab Test"
            icon={() => <FontAwesome5 name="microscope" size={24} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Order Medicines"
            icon={() => <FontAwesome5 name="pills" size={24} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="MFine Membership"
            icon={() => <FontAwesome5 name="laptop-medical" size={24} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Care programs"
            icon={() => <Ionicons name="happy" size={24} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Tools and Trackers"
            icon={() => <MaterialIcons name="track-changes" size={24} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Explore More"
            icon={() => <MaterialIcons name="explore" size={24} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
          

        </View>
        {/* records */}
        <Text style={styles.blackText}>RECORDS</Text>

        <View>
          <DrawerItem
            label="My Orders"
            icon={() => <FontAwesome5  name="shopping-bag" size={28} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
             labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Health Files"
            icon={() => <FontAwesome5 name="file-archive" size={28} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="InvoiceS"
            icon={() => <FontAwesome5 name="file-invoice" size={24} color="black" />}
            onPress={() => props.navigation.navigate('ConsultNowScreen')}
            labelStyle={styles.drawerItemLabel}
          />
  
          

        </View>
      </View>

      {/* Drawer Items */}
      {/* <View style={styles.drawerItems}>
        <DrawerItem
          label="Home"
          icon={() => <MaterialIcons name="home" size={24} color="black" />}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Settings"
          icon={() => <MaterialIcons name="settings" size={24} color="black" />}
          onPress={() => props.navigation.navigate('Settings')}
        />
        <DrawerItem
          label="Profile"
          icon={() => <MaterialIcons name="person" size={24} color="black" />}
          onPress={() => props.navigation.navigate('Profile')}
        />
      </View> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
container: {
    padding: 0,
    margin: 0,
   },
  contentContainer: {
    padding: 0,
    margin: 0,
  },
  profileSection: {
    // alignItems: 'center',
    // padding: 10,
    backgroundColor: '#f4f4f4',
    padding: 0,
    margin: 0,
    gap: 20,
  },
  familyHolderContainer: {
    backgroundColor: '#2EBBEE',
    color: 'white',
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  familyHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  addFamilyHolder: {
    alignItems: 'center',
    justifyContent: 'center',
     borderRadius:'50%',
    padding:5,
   },
  addFamily: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  familyText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15
  },

  shareAppHolder: {
    flexDirection: 'row',
    gap: 20,
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
  },
  drawerItemLabel: {
    fontWeight:'semibold',
    color: 'black',
  },
});
