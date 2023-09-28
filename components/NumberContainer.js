const { View, Text, StyleSheet, Dimensions } = require("react-native")

const NumberContainer = ({children}) => {
    return (
        <View style = {styles.container}>
            <Text style = { styles. numberText }>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container : {
        borderWidth : 4 ,
        borderColor : '#FFFFFF',
        padding : deviceWidth < 450 ? 12 : 24,
        margin : deviceWidth < 380 ? 12 : 24,
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