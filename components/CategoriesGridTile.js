import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

export default function CategoriesGridTile({title, color, onPress}) {
  return (
    <View style={[styles.gridItem, {backgroundColor:color}]}>
        <Pressable 
        android_ripple={{color:'#ccc'}} 
        style={styles.PressableButton}
        onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        borderRadius: 8,
        height: 150,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : "visible",
    },
    PressableButton: {
        flex:1
    },
    innerContainer:{
        flex: 1,
        justifyContent: 'center',
        padding:16,
        alignItems: 'center',
    },
    title:{
        fontSize: 18,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    }
})
