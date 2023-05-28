import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./Input.style";

const Input = ({placeholder, value, onType, isSecure, iconName}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                value={value}
                autoCapitalize="none"
                onChangeText={onType}
                secureTextEntry={isSecure}
                placeholderTextColor='white'
                
            />
            <Icon style={styles.icon} name={iconName} />
        </View>
    )
}

export default Input