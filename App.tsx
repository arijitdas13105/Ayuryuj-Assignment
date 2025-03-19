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
 
function App(): React.JSX.Element {
  const Tab=createBottomTabNavigator();
  return (
    <View style={{flex:1,padding:5}} >
     <NavigationContainer >
      
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

    </NavigationContainer>
    </View>
   );
}

export default App;
