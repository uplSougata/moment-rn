import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import HomeSkeletonCard from '../Components/HomeSkeletonCard';
import HomeCard from '../Components/HomeCard';
import { FlashList } from '@shopify/flash-list';
import { Dummy } from '../Asset/JSON/dummy';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../utility/NavigationDataTypes';
import { HomeStyles } from '../utility/CustomStyles';
import { useCreateAndGetData, useDetailStore } from '../Store/ZustandStore';
import NoListFoundLoader from '../Components/NoListFoundLoader';

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [InputDataObject, setInputDataObject] = useState<any>([]);
    const { height, width } = Dimensions.get("window");
    const isDarkMode = useColorScheme() === 'dark';

    const navigation: NavigationTypes = useNavigation();

    const store = useDetailStore((state: any) => state.setDetails);
    const InputData = useCreateAndGetData((state: any) => state.storedData);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    function splitArrayIntoPairs(array: any) {
        const pairs = [];
        for (let i = 0; i < array.length; i += 2) {
            pairs.push(array.slice(i, i + 2));
        }
        return pairs;
    }
    return (
        <SafeAreaView style={{
            backgroundColor: isDarkMode ? '#000' : '#fff',
            height: height,
            width: width,
            // margin: 5,
        }}>
            {isLoading ? <HomeSkeletonCard /> :
                <ScrollView >
                    {InputData.length == 0 ?
                        <NoListFoundLoader /> :
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            <View style={{ flex: 1, marginRight: 2.5 }}>
                                {InputData.map((item, index) => (

                                    index == 1 || index % 2 == 0 &&
                                    <HomeCard
                                        image={item.image}
                                        details={item.text}
                                        heading={item.headText}
                                        onPress={() => {
                                            store(item)
                                            navigation.navigate('DetailsScreen')
                                        }}
                                    />


                                ))}
                            </View>
                            <View style={{ flex: 1, marginLeft: 2.5 }}>
                                {InputData.map((item, index) => (

                                    index == 0 || index % 2 != 0 && <HomeCard
                                        image={item.image}
                                        details={item.text}
                                        heading={item.headText}
                                        onPress={() => {
                                            store(item)
                                            navigation.navigate('DetailsScreen')
                                        }}


                                    />

                                ))}
                            </View>
                        </View>}
                </ScrollView>
            }
            {!isLoading &&
                <TouchableOpacity onPress={() => { navigation.navigate('AddDetails') }} style={HomeStyles.floatingButtonStyle}>
                    <Image
                        source={require('../Asset/Image/add_1.png')}
                        style={{ height: 30, width: 30 }}
                    />
                </TouchableOpacity>}
            {/* <ScrollView>
                {splitArrayIntoPairs(Dummy).map((pair, rowIndex) => (
                    <View key={rowIndex} style={{ flexDirection: 'row', borderWidth: 1 }}>
                        {pair.map((item, colIndex) => (
                            <View key={colIndex} style={{ marginRight: colIndex === 0 ? 10 : 0 }}>
                                <HomeCard
                                    image={item.image}
                                    details={item.text}
                                    heading={item.headText}
                                />
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView> */}
            {/* <FlashList
                numColumns={2}
                data={Dummy}
                renderItem={({ item, index }) =>
                (
                    <HomeCard
                        image={item.image}
                        details={item.text}
                        heading={item.headText}

                    />
                )
                }
            /> */}

        </SafeAreaView >

    )
}


