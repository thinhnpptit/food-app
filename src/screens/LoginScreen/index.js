import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Button from './Button';
import Input from './Input';

export default function Login() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Sign In</Text>

                <Input placeholder='Email ID' />
                <Input placeholder='Password' isSecureTextEntry />

                <View style={styles.forgotContainer}>
                    <TouchableOpacity style={{ paddingVertical: 10 }}>
                        <Text style={styles.btnTextForgotPass}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={[styles.btnTextForgotPass, { color: 'white' }]}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', padding: 15, color: 'gray' }}>or</Text>
                    <View style={styles.btnLoginGG}>
                        <Button title='Google'
                            bgColor='white'
                            textColor='black'
                            icon={require('../../assets/ic_google.png')}
                        />
                        <Button title='Facebook'
                            bgColor='blue'
                            textColor='white'
                            icon={require('../../assets/ic_facebook.png')}
                        />
                    </View>
                </View>
                
                <View style={{ flexDirection: 'row', paddingVertical: 20, justifyContent: 'center' }}>
                    <Text style={{ color: 'gray' }}>Not yet a member, </Text>
                    <TouchableOpacity>
                        <Text style={[styles.btnTextForgotPass, { color: 'red' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    btnTextForgotPass: {
        fontWeight: 'bold',
        justifyContent: 'flex-end'
    },
    forgotContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btnLogin: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    btnLoginGG: {
        flexDirection: 'row'
    }
})
