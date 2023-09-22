import { Text, View, title, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton";

const GameIsOver = ({ roundsNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Text>The Game Is Over</Text>
            <View>
                <Text style={styles.ImageStyle}>
                    Your Phone needed <Text style={styles.highlightStyle}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightStyle}>{userNumber}</Text>....
                </Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
        </View>
    )
}

export default GameIsOver;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageStyle : {
        padding: 34,
        fontSize: 24,
        textAlign: 'center',
    },
    highlightStyle : {
        color : "#FFFFFF",
    }
})