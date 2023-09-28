import { Text, View, StyleSheet, Alert, FlatList, ScrollView, useWindowDimensions, StatusBar } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/card";
import GuessLogItems from "../components/GuessLogItems";

function GenerateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        GenerateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber, isGameOver }) {

    const initialGuess = GenerateRandomNumber(minBoundry, maxBoundry, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            isGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, isGameOver])

    useEffect(() => {
        minBoundry = 1;
        maxBoundry = 100;
    }, [])

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie", 'You know that this is wrong',
                [{ text: "sorry!" }]
            )
            return;
        }
        if (direction === "lower") {
            maxBoundry = currentGuess;
        } else {
            minBoundry = currentGuess + 1;
        }
        const newRndNum = GenerateRandomNumber(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRndNum);

        setGuessRounds((prevGuessRound) => [...prevGuessRound, newRndNum])

        const guessRoundNumber = guessRounds.length;
        console.log("guessRoundNumber", guessRoundNumber)
    }

    let container = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <View style={styles.ButtonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton style={styles.cascadingStyle} onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton style={styles.cascadingStyle} onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
        </Card>
    </>

    if (width > 730) {
        container =
            <>
                <View style={styles.landscapeButtonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton style={styles.cascadingStyle} onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton style={styles.cascadingStyle} onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </>
    }
    return (
        <>
        <View style={styles.GameScreen}>
            <Title>Opponents's Guess</Title>
            {container}
            {/* <ScrollView > */}
            <View>
                <FlatList data={guessRounds} renderItem={(itemData) =>
                    // <Text key={itemData.item}>{itemData.item}</Text>} 
                    <GuessLogItems guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
            {/* </ScrollView> */}
        </View>
        </>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    GameScreen: {
        flex: 1,
        alignItems: "center"
    },
    ButtonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1
    },
    cascadingStyle: {
        width: "60%",
        marginLeft: 40
    },
    landscapeButtonsContainer:{
        flexDirection: "row",
        alignItems: "center"
    }
})