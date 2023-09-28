import { TextInput, Button, View, StyleSheet, Alert, Text, Dimensions, useWindowDimensions, KeyboardAvoidingView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Card from "../components/card";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const { width, height } = useWindowDimensions();

    const numberInputHandler = (textNumber) => {
        setEnteredNumber(textNumber)
    }

    const resetInputValue = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredNumber);

        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >= 99) {
            Alert.alert("Invalid number", "Please enter a valid number in between 0 to 99.",
                [{ text: "Okay", style: "destructive", onPress: resetInputValue }]);
            return;
        }

        onPickNumber(chooseNumber)
    }

    const marginTopSize = height < 380 ? 30 : 50;

    return (
        // <KeyboardAvoidingView style={{flex:1}}>
            <View style={[styles.rootContainer, {marginTop: marginTopSize}]}>
            <Card>
                <Text style={styles.textStyles}>Select a Number</Text>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.ButtonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputValue}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
        // </KeyboardAvoidingView>
    )
}

export default StartGameScreen;

// const DimensionsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center'
    },
    textStyles: {
        color: '#fff',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 25,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 8
    },
    ButtonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1
    }
})