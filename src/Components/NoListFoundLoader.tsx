import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const { height, width } = Dimensions.get('window')
export default function NoListFoundLoader() {
    return (
        <View style={styles.mainContainer}>
            <LottieView
                style={{ height: height / 3, width: width }}
                source={require('../Asset/JSON/NoListFound.json')} autoPlay loop={false} />
            <View style={{
                width: width,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -30,
            }}>
                <Text style={{ fontSize: 11, color: '#9CAFAA' }}>Oops! It seems there's no data available at the moment.</Text>
                <Text style={{ fontSize: 11, color: '#9CAFAA' }}>Please add new first or try again.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height - 40
    }
})