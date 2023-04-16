import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OclockComponent from './src/components/oclock-component';
import LunarComponent from './src/components/lunar-component';
import LunarCalendarComponent from './src/components/lunar-calendar-component';

export default function App() {
  return (
    <View style={styles.container}>
      <OclockComponent></OclockComponent>
      <LunarComponent></LunarComponent>
      <LunarCalendarComponent></LunarCalendarComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
