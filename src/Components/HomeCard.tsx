import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    View,
    useColorScheme,
    TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { calculateLineLength } from '../utility/utilityMethod';
import { HomeCardStyles } from '../utility/CustomStyles';
import Animated from 'react-native-reanimated';


interface HomeCardProps {
    image: any,
    details: string,
    heading: string,
    onPress?: any
}
export default function HomeCard(props: HomeCardProps) {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onPress}
            style={HomeCardStyles.mainCard}>
            <ImageBackground
                source={{ uri: props?.image }}
                style={HomeCardStyles.backGroundImageStyle}
                resizeMode='cover'
                blurRadius={Platform.OS === 'ios' ? 8 : 5}
            >
                <View style={{ marginTop: 60, padding: 10 }}>
                    <Text style={HomeCardStyles.headingStyle}>
                        {props?.heading}
                    </Text>
                    <Text
                        numberOfLines={calculateLineLength(props?.details)}
                        style={HomeCardStyles.detailsTextStyle}>
                        {props?.details}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

