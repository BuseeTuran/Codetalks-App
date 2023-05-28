import { StyleSheet, Platform } from "react-native";

import colors from "../../../styles/colors";

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.shineorange,
        padding: 10
    },
    header: {
        fontSize: Platform.OS === 'android' ? 25 : 60,
        fontWeight: 'bold',
        marginTop: 190,
        marginBottom: 90,
        color: 'white',
        letterSpacing: 3,
        position: 'relative',
        alignSelf: 'center', 
    }
})