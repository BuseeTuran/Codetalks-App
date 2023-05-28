import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create ({
    container: {
        margin: 10,
        flexDirection: 'row',
        
       
    },
    input: {
        flex: 1,
        padding: Platform.OS === 'android' ? 10 : 15 ,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 14,
    },
    icon: {
        fontSize: 18,
        right: 10,
        marginTop: 18,
        position: 'absolute',
        color: 'white'
        
    }
   
    
})