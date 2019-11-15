import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';


const ChatInput = ({ title, handler }) => (
    <TouchableOpacity
        title={title}
        style={title === 'submit' ? styles.submit : styles.navigate}
        onPress={handler}
    >
        <Text>{title}</Text>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    submit: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 6,
        marginTop: 5
    },
    navigate: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 6,
        marginTop: 5
    },
});
export default ChatInput;
