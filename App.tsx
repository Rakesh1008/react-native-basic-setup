import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function App() {
  return (
    <View style={styles.appContainer}>
      <Text>Hello World!!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
});

export default App;
