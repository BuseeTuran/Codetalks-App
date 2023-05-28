import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const base_style = StyleSheet.create ({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        top: 25
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    }
})

export default {
    primary: StyleSheet.create ({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#fa9856',
            
            
        },
        title: {
            ...base_style.title,
            color: 'white',
        }
    }),
    secondary: StyleSheet.create ({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderColor: '#ffbd67',
            borderWidth: 1,
        },
        title: {
            ...base_style.title,
            color: '#ffbd67',
        }
    })
}