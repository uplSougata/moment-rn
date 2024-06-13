import { Dimensions, Image, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { MotiView, ScrollView } from 'moti';
import { useDetailStore } from '../Store/ZustandStore';
import { DetailsScreenStyles } from '../utility/CustomStyles';
import Animated from 'react-native-reanimated';

const { height, width } = Dimensions.get("window");

export default function DetailsScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const details = useDetailStore((state: any) => state.details);

    return (

        <View style={[DetailsScreenStyles.mainContainer, { backgroundColor: isDarkMode ? '#000' : '#F1EEDC' }]}>
            <Image
                source={{ uri: details.image }}
                style={DetailsScreenStyles.imageStyle}
            />
            <MotiView
                from={{
                    opacity: 0,
                    translateY: 800
                }}
                animate={{
                    opacity: 1,
                    translateY: 0
                }}
                transition={{
                    type: 'timing',
                    duration: 700,
                    delay: 80,
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={[DetailsScreenStyles.scrollViewStyle, {
                        backgroundColor: isDarkMode ? '#2B2B2B' : '#fff',
                    }]}>
                    <View style={DetailsScreenStyles.headerTextContainer}>
                        <Text style={[DetailsScreenStyles.headerTextStyle, {
                            color: isDarkMode ? '#fff' : '#000'
                        }]}>{details.headText}</Text>
                    </View>
                    <Text style={[DetailsScreenStyles.descriptionTextStyle, {
                        color: isDarkMode ? '#fff' : '#000'
                    }]}>{details.text}</Text>
                </ScrollView>
            </MotiView>
        </View >
    )
}
