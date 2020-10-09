import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import SplashImage from '../../assets/SplashScreen.png'

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            goLoginScreen();
        }, 3000);
    })

    const goLoginScreen = () => {
        navigation.navigate('LoginScreen')
    }
    
    return (
        <ImageBackground style={styles.splash} source={SplashImage} />
    )
}


const styles = StyleSheet.create({
    splash: {
        flex: 1
    }
})
