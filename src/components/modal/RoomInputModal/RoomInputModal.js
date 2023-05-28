import React, {useState} from "react";
import { View, TextInput } from "react-native";
import Modal from "react-native-modal";

import styles from "./RoomInputModal.style";
import Button from "../../Button";

const RoomInputModal = ({visible, onClose, onSend, placeholder, buttonText}) => {

    const [text, setText] = useState(null)

    function handleSend () {
        if (!text) {
            return;
        }
        onSend(text)
        setText(null)
    }

    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            onBackButtonPress={onClose}
            style={styles.modal}
            swipeDirection="down"
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput 
                        placeholder={placeholder}
                        onChangeText={setText}
                        multiline
                    />
                </View>
                <Button text={buttonText} onPress={handleSend} />
            </View>
        </Modal>
    )
}

export default RoomInputModal