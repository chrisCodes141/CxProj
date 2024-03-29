import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

const Testing = {
  ThisIsTrue: true,
}

function add(x: number, y: number){
  return x+y;
}


export default function App() {
  return (
    <View style={{ flex: 1 }}>

      {Platform.OS === 'ios' && (
        <View style={{
          flex: 1,
          backgroundColor: 'blue'

        }} />
      )}

      {Platform.OS === 'android' && (
        <View style={{
          flex: 1,
          backgroundColor: 'red'
        }} />
      )}

      {Platform.OS === 'web' && (
        <View style={{
          flex: 1,
          backgroundColor: 'purple'
        }} />
      )}


    </View>
  )
}


// export default function App2() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
