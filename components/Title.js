import { Text, View, StyleSheet } from "react-native";


const Title = ({ children }) => {
    return(
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    title : {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        padding: 12,
        borderColor: "#ffffff",
        borderWidth: 2
        }
})