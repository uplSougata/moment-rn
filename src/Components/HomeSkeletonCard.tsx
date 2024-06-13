import { Dimensions, FlatList, Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewStyle, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import HomeCard from './HomeCard';
import { Dummy } from '../Asset/JSON/dummy';
import { FlashList } from '@shopify/flash-list';
import { HomeCardStyles } from '../utility/CustomStyles';
import { calculateLineLength } from '../utility/utilityMethod';
const { height, width } = Dimensions.get("window");

interface HomeSkeletonCardProps {
    image?: any,
    details?: string,
    heading?: string,
    onPress?: any
    height?: number | null | boolean | undefined
    borderRadius?: number
}
export default function HomeSkeletonCard(props: HomeSkeletonCardProps) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SkeletonPlaceholder
            speed={1500}
            backgroundColor={isDarkMode ? '#444444' : '#E1E9EE'}
            highlightColor={isDarkMode ? '#2B2B2B' : '#F2F8FC'}
            borderRadius={4} children={
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <View style={{ flex: 1,  }}>
                        {Dummy.map((item, index) => (

                            index == 1 || index % 2 == 0 &&
                            <View style={detailsContainer({
                                height: index == 1 ? height / 6 : index == 2 ? height / 2 : null,
                            })} />
                        )
                        )}
                    </View>
                    <View style={{ flex: 1, }}>
                        {Dummy.map((item, index) => (

                            index == 0 || index % 2 != 0 &&
                            <View style={detailsContainer({
                                height: index == 0 ? height / 10 : index == 3 ? height / 4 : null,
                            })} />

                        ))}
                    </View>
                </View>
            }>
        </SkeletonPlaceholder>
    )
}

const detailsContainer = (props: HomeSkeletonCardProps): ViewStyle => ({
    height: props?.height ?? height / 2.8,
    borderRadius: props?.borderRadius,
    backgroundColor: '#fff',
    margin: 2,
    justifyContent: 'flex-end',
});

const styles = StyleSheet.create({

})