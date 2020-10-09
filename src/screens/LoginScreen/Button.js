import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function Button({ title, icon, textColor, bgColor }) {
    return (
        <TouchableOpacity style={[
            styles.btnLogin,
            { backgroundColor: bgColor, flex: 1, borderWidth: 1, borderColor: 'gray', marginRight: 5 }
        ]}>
            <Image source={icon}
                style={{ height: 20, width: 20, marginRight: 5 }} />
            <Text style={[styles.btnTextForgotPass, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnTextForgotPass: {
        fontWeight: 'bold',
        justifyContent: 'flex-end'
    },
    btnLogin: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    }
})
