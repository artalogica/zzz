import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import {Entypo} from '@expo/vector-icons'

export default function Button({title, onPress, icon, color}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={28} color={color ? color : 'gray'}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'gray',
        marginLeft: 10
    }
})