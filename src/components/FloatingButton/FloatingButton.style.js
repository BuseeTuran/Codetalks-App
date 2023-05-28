import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create ({
    container: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: colors.shineorange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        right: 20,
        bottom: 20,
        borderColor: '#FF5722',
        borderWidth: 2,

    }
})