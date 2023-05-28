import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";

const deviceSize = Dimensions.get('window')

export default StyleSheet.create ({
    container: {
        flex: 1,
        margin: 7,
        padding: 5,
         
    },
    inner_container: {
        height: deviceSize.height/3.5,
        width: deviceSize.width/2.3, 
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: colors.shineorange,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        color: colors.shineorange
    }
})