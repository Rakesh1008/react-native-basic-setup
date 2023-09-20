import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal
} from 'react-native';

function goalItem(props) {
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.goalItems}>
                <Pressable
                    android_ripple={{ color: "#dddddd" }}
                    onPress={props.onDeleted.bind(this, props.id)}
                    style={({ pressed }) => pressed && styles.PressableItems}
                >
                    <Text style={styles.goalText}>{props.item}</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

export default goalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    PressableItems: {
        opacity: 0.5
    },
    goalText: {
        color: "#fff",
        padding: 8,
    }
})