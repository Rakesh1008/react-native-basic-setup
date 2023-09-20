import { useState } from "react";
import { View, TextInput, Button,StyleSheet } from "react-native";

const GoalInput = (props) => {

    const [enterGoalText, setEnterGoalText] = useState("");
    const goalInputHandler = (enteredText) => {
        setEnterGoalText(enteredText);
      }

      const addGoalHandler = () => {
        props.onAddGoal(enterGoalText)
      }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Enter Your Goals' onChangeText={goalInputHandler} />
            <Button title='enter' onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        marginRight: 8,
        padding: 8
      },
})