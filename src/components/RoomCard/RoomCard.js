import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styles from "./RoomCard.style";

const RoomCard = ({room, onSelect}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <View style={styles.inner_container}>
                <Text style={styles.text}>{room.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RoomCard