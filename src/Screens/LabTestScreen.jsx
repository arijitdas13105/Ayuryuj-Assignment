import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const LabTestScreen = () => {
    console.log("HomeScreenGridData");
  useEffect(() => {
    console.log("HomeScreenGridData");
  },[])
  return (
    <View>
      <Text>LabTestScreen</Text>
    </View>
  )
}

export default LabTestScreen