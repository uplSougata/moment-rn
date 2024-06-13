import { Dimensions, Image, StyleSheet, Text, View, useColorScheme, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-paper'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../utility/NavigationDataTypes';
import { addDetailsValidation } from './AddDetailsValidation';
import { useCreateAndGetData } from '../Store/ZustandStore';



export default function AddDetails() {
    const [text, setText] = React.useState("");
    const isDarkMode = useColorScheme() === 'dark';
    const { height, width } = Dimensions.get("window");
    const [selectedImage, setSelectedImage] = useState(null);

    const navigation: NavigationTypes = useNavigation();
    const store = useCreateAndGetData((state: any) => state.setData);


    const handleCameraLaunch = () => {
        const options: any = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                console.log('SelectedImage', imageUri);
            }
        });
    }

    const openImagePicker = () => {
        const options: any = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                console.log('imageUri===>', imageUri);

            }
        });
    };

    return (
        <Formik
            validateOnMount={true}
            validationSchema={addDetailsValidation}
            initialValues={{
                title: '',
                description: '',
                // image: '',
            }}
            onSubmit={values => {
                const data = {
                    image: selectedImage,
                    text: values.description,
                    headText: values.title
                }
                store(data)
                navigation.navigate('Home');
            }}>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                setTouched,
                setErrors,
                setFieldValue,
            }) => (
                <>
                    <SafeAreaView style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                        backgroundColor: isDarkMode ? '#000' : '#fff'
                    }}>
                        <ScrollView

                        >
                            <KeyboardAvoidingView style={{ padding: 20 }}>
                                <View style={{
                                    width: width - 40,
                                    borderWidth: 1,
                                    borderColor: !isDarkMode ? '#000' : '#7f7f7f',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: isDarkMode ? '#000' : '#fff',
                                    padding: 10,
                                    borderRadius: 10,
                                    marginBottom: 20
                                }}>
                                    <View
                                        style={{
                                            height: height / 4.5,
                                            width: width - 60,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: isDarkMode ? '#000' : '#fff'
                                        }}>
                                        {selectedImage == null ?
                                            <View
                                                style={{
                                                    flex: 1,
                                                    width: '100%',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderWidth: 1,
                                                    borderStyle: 'dashed',
                                                    borderColor: !isDarkMode ? '#000' : '#7f7f7f',
                                                }}
                                            >
                                                <Icon name="image-plus" size={50} color={isDarkMode ? "#fff" : "#000"} />
                                            </View> :
                                            <Image
                                                source={{ uri: selectedImage }}
                                                style={{
                                                    height: height / 4.5,
                                                    width: width - 60,
                                                    backgroundColor: '#000'
                                                }}
                                                resizeMode='cover'
                                            />
                                        }
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <TouchableOpacity
                                            onPress={() => handleCameraLaunch()}
                                            style={{
                                                height: 50,
                                                flex: 1,
                                                marginTop: 10,
                                                marginRight: 10,
                                                borderRadius: 10,
                                                backgroundColor: isDarkMode ? '#d3cef5' : '#756AB6',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                elevation: 5
                                            }}
                                        >
                                            <Text style={{
                                                fontSize: 14,
                                                fontWeight: '600',
                                                color: isDarkMode ? '#000' : '#fff'
                                            }}>Capture Image</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => openImagePicker()}
                                            style={{
                                                height: 50,
                                                flex: 1,
                                                marginTop: 10,
                                                marginLeft: 10,
                                                borderRadius: 10,
                                                backgroundColor: isDarkMode ? '#d3cef5' : '#756AB6',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                elevation: 5
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: '600',
                                                    color: isDarkMode ? '#000' : '#fff'
                                                }}
                                            >Select Image</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* {errors.image && touched.image &&
                                        <Text style={[{
                                            fontWeight: '400',
                                            fontSize: 13,
                                            marginTop: 2,
                                            fontFamily: 'arial',
                                        }, { color: isDarkMode ? '#FF7F7F' : '#FF0000' }]}>
                                            {errors.image}
                                        </Text>
                                    } */}
                                </View>
                                <View style={{ marginBottom: 20, }}>
                                    <TextInput
                                        style={{ backgroundColor: isDarkMode ? '#000' : '#fff', color: '#7f7f7f' }}
                                        mode='outlined'
                                        label="Title"
                                        value={values.title}
                                        name='title'
                                        placeholder='Enter Title'
                                        placeholderTextColor={'#7f7f7f'}
                                        onChangeText={handleChange('title')}
                                        textColor={isDarkMode ? '#d3cef5' : '#000'}
                                        theme={{
                                            colors: {
                                                primary: isDarkMode ? '#d3cef5' : '#756AB6',
                                            }
                                        }}
                                    />
                                    {errors.title && touched.title &&
                                        <Text style={[{
                                            fontWeight: '400',
                                            fontSize: 13,
                                            marginTop: 2,
                                            fontFamily: 'arial',
                                        }, { color: isDarkMode ? '#FF7F7F' : '#FF0000' }]}>
                                            {errors.title}
                                        </Text>
                                    }
                                </View>
                                <View style={{ marginBottom: 20, }}>
                                    <TextInput
                                        style={{ backgroundColor: isDarkMode ? '#000' : '#fff', color: '#7f7f7f', }}
                                        multiline
                                        mode='outlined'
                                        label="Description"
                                        name='description'
                                        value={values.description}
                                        placeholder='Enter Description'
                                        placeholderTextColor={'#7f7f7f'}
                                        selectionColor='#7f7f7f'
                                        onChangeText={handleChange('description')}
                                        textColor={isDarkMode ? '#d3cef5' : '#000'}
                                        theme={{
                                            colors: {
                                                primary: isDarkMode ? '#d3cef5' : '#756AB6'
                                            }
                                        }}
                                    />
                                    {errors.description && touched.description &&
                                        <Text style={[{
                                            fontWeight: '400',
                                            fontSize: 13,
                                            marginTop: 2,
                                            fontFamily: 'arial',
                                        }, { color: isDarkMode ? '#FF7F7F' : '#FF0000' }]}>
                                            {errors.description}
                                        </Text>
                                    }
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                        <View style={{ justifyContent: 'flex-end', height: 100 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 80, paddingVertical: 15, paddingHorizontal: 45 }}>
                                    <TouchableOpacity
                                        onPress={() => { handleSubmit() }}
                                        style={{
                                            height: 50,
                                            flex: 1,
                                            marginTop: 10,
                                            marginLeft: 10,
                                            borderRadius: 15,
                                            backgroundColor: isDarkMode ? '#d3cef5' : '#756AB6',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            elevation: 3
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: '600',
                                                color: isDarkMode ? '#000' : '#fff'
                                            }}
                                        >Save</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, height: 80, paddingVertical: 15, paddingHorizontal: 45 }}>
                                    <TouchableOpacity
                                        onPress={() => { navigation.goBack() }}
                                        style={{
                                            height: 50,
                                            flex: 1,
                                            marginTop: 10,
                                            marginLeft: 10,
                                            borderRadius: 15,
                                            backgroundColor: isDarkMode ? '#d3cef5' : '#756AB6',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            elevation: 3
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: '600',
                                                color: isDarkMode ? '#000' : '#fff'
                                            }}
                                        >Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </>)}</Formik>
    )
}

const styles = StyleSheet.create({})