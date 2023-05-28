import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
        flex: 1,
        margin: 10,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffbd67',
        
    },
    inner_container: {
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
        

    },
    user: {
        fontSize: 14,
        color: 'black'

    },
    date: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'black'
    },
    message_container: {
        paddingBottom: 15,
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        top: 15
        

    }
})