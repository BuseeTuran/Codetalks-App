import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";

import styles from "./Rooms.style";
import FloatingButton from "../../components/FloatingButton";
import RoomInputModal from "../../components/modal/RoomInputModal";
import parseContentData from "../../utils/parseContentData";
import RoomCard from "../../components/RoomCard";
import { showMessage } from "react-native-flash-message";

const Rooms = ({navigation}) => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [roomList, setRoomList] = useState([]);

    function handleInputToggle () {
        setInputModalVisible(!inputModalVisible) // Açıksa kapat kapalıysa aç
    }

    function handleContentSend (content) {
        handleInputToggle();
        sendContent(content);
    }

    async function sendContent(content){
        const userMail = auth().currentUser.email
        const newRoom = roomList.findIndex((room) => room.text.toLowerCase() === content.toLowerCase())
        if (newRoom > 0) {
            showMessage ({
                message: "Bu oda daha önce oluşturuldu.",
                type: "default",
                backgroundColor: '#F97B22',
                color: 'white'
            })
            return
        }
        try {
            const contentObject = {
                text: content,
                username: userMail.split('@')[0],
                date: new Date().toISOString(),
            }
            await database().ref('rooms/').push(contentObject)
        } catch (error) {
            showMessage ({
                message: error,
                type: "default",
                backgroundColor: '#F97B22',
                color: 'white'
            });
        }
    }

    useEffect (() => {
        const reference = database().ref('rooms/')
        reference.on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setRoomList(parsedData)
        })
    }, [])

    const renderRoom = ({item}) => 
        <RoomCard room={item} onSelect={() => handleDetailRoom({item})} />
    

    const handleDetailRoom = (item) => {
        navigation.navigate('MessagesPage', item)
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={roomList}
                renderItem={renderRoom}
                numColumns={2}
                
            />
            <FloatingButton iconName='home-plus' onPress={handleInputToggle} />
            <RoomInputModal 
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleContentSend}
                placeholder="Bir oda oluşturun.."
                buttonText="Ekle"
            />
        </View>
    )
}

export default Rooms