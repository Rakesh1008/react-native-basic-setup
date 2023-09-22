import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress, style }) {
    return (
            <View style={[styles.buttonOutsidecontainer, style]}>
                <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInsidecontainer, pressed] : styles.buttonInsidecontainer} 
                onPress={onPress} 
                android_ripple={{color : '#644202'}}>
                <Text style = {styles.buttonText}>
                    {children}
                </Text>
                </Pressable>
            </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOutsidecontainer:{
        borderRadius : 28,
        margin : 4
    },
    buttonInsidecontainer : {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    }
})