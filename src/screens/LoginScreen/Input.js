import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Input({ placeholder, value, onChangeText, isSecureTextEntry }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{placeholder}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isSecureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    title: {
        marginVertical: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 5
    }
})

