import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
    return(
        <View style={styles.Card}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    Card:{
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 6,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#4e0329'
    }
})