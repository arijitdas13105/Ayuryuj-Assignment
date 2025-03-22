import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/Home/HomeScreen';
import LabTestScreen from './src/Screens/LabTestScreen';
import ConsultNowScreen from './src/Screens/ConsultNowScreen';
import MedicinesScreen from './src/Screens/MedicinesScreen';
import MyOrderScreen from './src/Screens/MyOrderScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/Drawer/CustomDrawer';
import ChooseDoctorScreen from './src/Screens/ChooseDoctorScreen';
import PhoneSignIn from './src/Screens/PhoneSignIn';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const Stack = createDrawerNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: () => {
            let iconName, iconSize,IconComponent=MaterialCommunityIcons;

            switch (route.name) {
              case 'HomeScreen':
                iconName = 'home';
                iconSize = 30;
                break;
              case 'LabTestScreen':
                iconName = 'microscope'; 
                IconComponent = FontAwesome5;
                iconSize = 30;
                break;
              case 'ConsultNowScreen':
                iconName = 'pulse';
                IconComponent = Fontisto;
                iconSize = 25;
                break;
              case 'MedicinesScreen':
                iconName = 'pills';
                IconComponent = Fontisto;
                iconSize = 30;
                break;
              case 'MyOrderScreen':
                iconName = 'shopping-bag';
                IconComponent = Entypo;
                iconSize = 30;
                break;
              default:
                iconName = 'home';
                iconSize = 30;
                break;
            }

            return <IconComponent name={iconName} size={iconSize} />;
          },
        })}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="LabTestScreen"
          component={LabTestScreen}
          options={{title: 'Lab Test'}}
        />
        <Tab.Screen
          name="ConsultNowScreen"
          component={ConsultNowScreen}
          options={{
            title: 'Consult Now',
            tabBarLabel: "Consult Now",
            tabBarIconStyle: {
              backgroundColor:'#E96B1C',
              width: 50,
              height: 50,
              borderRadius: '50%',
              // marginBottom: 45,
              marginTop: -24, // Moves the icon higher (decrease value to move more)
            },
            // tabBarLabel: "Lab Test", 
             
            
          }}
        />
        <Tab.Screen
          name="MedicinesScreen"
          component={MedicinesScreen}
          options={{title: 'Medicines'}}
        />
        <Tab.Screen
          name="MyOrderScreen"
          component={MyOrderScreen}
          options={{title: 'Orders'}}
        />
      </Tab.Navigator>
    );
  }

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={BottomTabs} />

        <Drawer.Screen name="LabTestScreen" component={LabTestScreen} />
        <Drawer.Screen name="ConsultNowScreen" component={ConsultNowScreen} />
        <Drawer.Screen name="MedicinesScreen" component={MedicinesScreen} />
        <Drawer.Screen name="MyOrderScreen" component={MyOrderScreen} />
      </Drawer.Navigator>
    );
  };

  // Auth Loading Screen (Checks if User is Logged In)
  const AuthLoadingScreen = ({navigation}) => {
    console.log('naaviagation', navigation);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const user = auth().currentUser;
        console.log('user', user);
        if (user) {
          navigation.navigate('Main'); // Go to Main App if logged in
        } else {
          navigation.navigate('PhoneSignIn'); // Go to OTP Login if not logged in
        }
      };

      checkAuth();
    }, []);

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 5}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />

          <Stack.Screen name="Main" component={DrawerNavigator} />
          <Stack.Screen name="LabTestScreen" component={LabTestScreen} />
          <Stack.Screen name="PhoneSignIn" component={PhoneSignIn} />
          <Stack.Screen name="ConsultNowScreen" component={ConsultNowScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="ChooseDoctorScreen"
            component={ChooseDoctorScreen}
          />
        </Stack.Navigator>
        {/* <Drawer.Navigator screenOptions={{headerShown:false}} > */}

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
