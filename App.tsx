import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screen/mealsOverviewScreen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <StatusBar backgroundColor="orange" barStyle="dark-content" />
      {/* <View style={styles.appContainer}> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MealsCategories">
            <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "#24180f"
  },
});

export default App;
