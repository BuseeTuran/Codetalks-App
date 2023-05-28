import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

import styles from "./Messages.style";
import FloatingButton from "../../components/FloatingButton";
import RoomInputModal from "../../components/modal/RoomInputModal";
import MessageCard from "../../components/MessageCard";
import parseContentData from "../../utils/parseContentData";
import { showMessage } from "react-native-flash-message";


const Messages = ({route}) => {
    
    const [messageList, setMessageList] = useState([]);
    const [inputModal, setInputModal] = useState(false);
    const {item} = route.params;

    function handleToggle () {
        setInputModal(!inputModal)
    }

    function handleContent (message) {
        handleToggle();
        sendContent(message);
    }

    async function sendContent (message) {
        const userMail = auth().currentUser.email 
        try {
            const contentObject = {
                message: message,
                username: userMail.split('@')[0],
                date: new Date().toISOString(),
            }
            database().ref(`rooms/${item.id}/${item.text}`).push(contentObject);
        }
        catch(error) {
            showMessage({
                message: error,
                type: "success",
            });
        }
    }

    useEffect (() => {
        database().ref(`rooms/${item.id}/${item.text}`)
        .on('value', snapshot => {
            const contentData = snapshot.val();

            const parsedData = parseContentData(contentData || {});
            setMessageList(parsedData);
        })
    }, [])



    const renderMessages = ({item}) => 
        <MessageCard item={item} />
    

    return (
        <View style={styles.container}>
            <Text style={styles.room_name}>{item.text} odası kuruldu ! </Text>
            <FlatList 
                data={messageList}
                renderItem={renderMessages}
            />
            <FloatingButton iconName='plus' onPress={handleToggle} />
            <RoomInputModal 
                visible={inputModal}
                onClose={handleToggle}
                onSend={handleContent}
                placeholder="Mesajınız.."
                buttonText="Gönder"
            />

        </View>
    )
}

export default Messages