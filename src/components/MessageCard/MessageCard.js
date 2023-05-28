import React from "react";
import { View, Text } from "react-native";
import { formatDistance, parseISO } from "date-fns";
import { tr } from "date-fns/locale";

import styles from "./MessageCard.style";

const MessageCard = ({item}) => {

    const formattedDate = formatDistance(parseISO(item.date), new Date(), {
        addSuffix: true,
        locale: tr,
    });
    
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{item.username}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <View style={styles.message_container}>
                <Text style={styles.text}>{item.message}</Text>
            </View>
        </View>
    )
}

export default MessageCard