import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const  PhoneSignIn=()=> {
  const navigation=useNavigation()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpTimer, setOtpTimer] = useState(30);
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

   const sendOtp = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(`+91${phoneNumber}`);
      console.log("confirmation",confirmation)
      setConfirm(confirmation);
      Alert.alert('OTP Sent', 'Check your phone for the verification code.');
      setOtpTimer(30);
    } catch (error) {
      console.log('Error sending OTP:', error);
      Alert.alert('Error', error.message);
    }
  };

   const verifyOtp = async () => {
    try {
      if (confirm) {
        await confirm.confirm(otp);
        Alert.alert('Success', 'Phone number verified successfully!');
         navigation.navigate('Main');
      } else {
        Alert.alert('Error', 'Please request an OTP first.');
      }
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.authBox}>
        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png' }}
            style={styles.flagIcon}
          />
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TouchableOpacity onPress={sendOtp}>
            <MaterialIcons name="send" size={24} color="blue" />
          </TouchableOpacity>
        </View>

        {/* OTP Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity  >
            <Text style={styles.timer}>{otpTimer}s</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={verifyOtp}>
            <Text style={styles.timer}> Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  authBox: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '90%',
    height: 50,
    marginBottom: 15,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  timer: {
    fontSize: 14,
    color: '#0077b6',
    fontWeight: 'bold',
  },
  flagIcon: {
    width: 24,
    height: 16,
    marginRight: 5,
  },
});

export default PhoneSignIn