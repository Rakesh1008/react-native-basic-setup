import { Text, View, StyleSheet } from "react-native";

function GuessLogItems({roundNumber, guess}) {
    return(
        <View style= {styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>{guess}</Text>
        </View>
    )
}

export default GuessLogItems;

const styles = StyleSheet.create({
    listItem : {
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius : 10,
        padding : 12,
        marginVertical: 8,
        backgroundColor: "ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
    
})