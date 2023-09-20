import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {

  const [courceGoals, setCourceGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  const addGoalHandler = (enterGoalText) => {
    setCourceGoals((currentCourceGoals) => [
      ...currentCourceGoals,
      { text: enterGoalText, id: Math.random().toString() }
    ]);
  }

  const goalItemPressHandler = (id) => {
    setCourceGoals((currentCourceGoals) => {
      return currentCourceGoals.filter((goals) => goals.id != id);
    })
  }

  const startAddGoalHandler = () => {
    setModelIsVisible(true)
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title='all new model'
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList data={courceGoals} renderItem={(itemData) => {
          return (
            <GoalItem
              item={itemData.item.text}
              id={itemData.item.id}
              onDeleted={goalItemPressHandler} />
          )
        }} alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalContainer: {
    flex: 5
  },
});

export default App;
