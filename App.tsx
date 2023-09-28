import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  StatusBar
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameIsOver from './screens/GameOverScreen';

function App() {
  const [userNumber, setUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRoundNumber, setGuessRoundNumber] = useState(0)

  const pickedNumberHandler = (picked: React.SetStateAction<string>) => {
    setUserNumber(picked)
    setGameIsOver(false)
  }

  const GameOverHandler = (numberOfRounds: React.SetStateAction<number>) => {
    setGameIsOver(true)
    setGuessRoundNumber(numberOfRounds)
  }

  const startNewGameHanlder = () => {
    setUserNumber('')
    setGuessRoundNumber(0)
  }

  return (
    <>
    <StatusBar backgroundColor="orange"/>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.appContainer}>

        <View style={styles.pageTextContainer}>
          <Text style={styles.pageText}>Guess a Number</Text>
        </View>
        <SafeAreaView style={styles.appContainer}>
          <ImageBackground source={require('./assets/backGround.jpg')}
            style={styles.appContainer}
            imageStyle={styles.imageContainer}
          >
            {
              (gameIsOver && userNumber) ? <GameIsOver roundsNumber={guessRoundNumber} userNumber={userNumber} onStartNewGame={startNewGameHanlder} /> :
                userNumber ? <GameScreen userNumber={userNumber} isGameOver={GameOverHandler} /> : <StartGameScreen onPickNumber={pickedNumberHandler} />
            }
          </ImageBackground>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#ddb52f",
    alignItems: "center"
  },
  imageContainer: {
    opacity: 0.15
  },
  pageTextContainer: {
    padding: 16,
    marginBottom: 16
  },
  pageText: {
    color: "#ffffff",
  }
});
