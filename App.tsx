import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/Home/HomeScreen';
import LabTestScreen from './src/Screens/LabTestScreen';
import ConsultNowScreen from './src/Screens/ConsultNowScreen';
import MedicinesScreen from './src/Screens/MedicinesScreen';
import MyOrderScreen from './src/Screens/MyOrderScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/Drawer/CustomDrawer';
 
   // Screens for the drawer
const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
};
function App(): React.JSX.Element {
  const Tab=createBottomTabNavigator();
  const Drawer=createDrawerNavigator();

  function BottomTabs(){
    return(
      <Tab.Navigator screenOptions={({route})=>({
        headerShown:false,
        tabBarIcon:()=>{
          let iconName,iconSize;

          switch(route.name){
            case 'HomeScreen':
              iconName='home';
              iconSize=30;
              break;
            case 'LabTestScreen':
              iconName='medical-services';
              iconSize=30;
              break;
            case 'ConsultNowScreen':
              iconName='forum' ;
               iconSize=35;
              break;
            case 'MedicinesScreen':
              iconName='medication';
              iconSize=30;
              break;
            case 'MyOrderScreen':
              iconName='receipt';
              iconSize=30;
              break;
            default:
              iconName='home';
              iconSize=30;
              break;
          }

          return <MaterialCommunityIcons name={iconName} size={iconSize} />
        }
      })}>

    <Tab.Screen name="HomeScreen"  component={HomeScreen} />
    <Tab.Screen name="LabTestScreen"  component={LabTestScreen} />
    <Tab.Screen name="ConsultNowScreen"  component={ConsultNowScreen} />
    <Tab.Screen name="MedicinesScreen"  component={MedicinesScreen} />
    <Tab.Screen name="MyOrderScreen"  component={MyOrderScreen} />
    
      </Tab.Navigator>
    )
  }
  return (
    <View style={{flex:1,padding:5}} >
     <NavigationContainer >
      {/* <Drawer.Navigator screenOptions={{headerShown:false}} > */}
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>

        <Drawer.Screen name='Home' component={BottomTabs} />
        
        <Drawer.Screen name="LabTestScreen"  component={LabTestScreen} />
       <Drawer.Screen name="ConsultNowScreen"  component={ConsultNowScreen} />
      <Drawer.Screen name="MedicinesScreen"  component={MedicinesScreen} />
      <Drawer.Screen name="MyOrderScreen"  component={MyOrderScreen} />
      </Drawer.Navigator>
      {/* <Tab.Navigator screenOptions={({route})=>({
        headerShown:false,
        tabBarIcon:()=>{
          let iconName,iconSize;

          switch(route.name){
            case 'HomeScreen':
              iconName='home';
              iconSize=30;
              break;
            case 'LabTestScreen':
              iconName='medical-services';
              iconSize=30;
              break;
            case 'ConsultNowScreen':
              iconName='forum' ;
               iconSize=35;
              break;
            case 'MedicinesScreen':
              iconName='medication';
              iconSize=30;
              break;
            case 'MyOrderScreen':
              iconName='receipt';
              iconSize=30;
              break;
            default:
              iconName='home';
              iconSize=30;
              break;
          }

          return <MaterialCommunityIcons name={iconName} size={iconSize} />
        }
      })}>

    <Tab.Screen name="HomeScreen"  component={HomeScreen} />
    <Tab.Screen name="LabTestScreen"  component={LabTestScreen} />
    <Tab.Screen name="ConsultNowScreen"  component={ConsultNowScreen} />
    <Tab.Screen name="MedicinesScreen"  component={MedicinesScreen} />
    <Tab.Screen name="MyOrderScreen"  component={MyOrderScreen} />

      </Tab.Navigator> */}
      

    </NavigationContainer>
    </View>
   );
}

export default App;
