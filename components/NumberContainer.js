const { View, Text, StyleSheet } = require("react-native")

const NumberContainer = ({children}) => {
    return (
        <View style = {styles.container}>
            <Text style = { styles. numberText }>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container : {
        borderWidth : 4 ,
        borderColor : '#FFFFFF',
        padding : 24,
        margin : 24,
        borderRadius : 8,
        alignItems : 'center',
        justifyContent : 'center',
    }, 
    numberText: {
        color : '#FFFFFF',
        fontSize : 36,
        fontWeight : 'bold',
    }
})